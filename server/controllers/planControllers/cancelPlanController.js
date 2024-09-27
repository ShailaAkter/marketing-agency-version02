import purchasedPlansModel from "../../models/purchasedPlansModel.js";
export const cancelPlanController = async (req, res) =>{
  const { planId, itemId } = req.params; // Get planId and itemId from request parameters
  const { quantityToReduce } = req.body; // Get quantityToReduce from request body

  // Validate quantityToReduce
  if (isNaN(quantityToReduce) || quantityToReduce <= 0) {
    return res.status(400).json({
      success: false,
      message: 'Invalid quantity to reduce',
    });
  }

  try {
    // Find the purchased plan by itemId
    const purchasedPlan = await purchasedPlansModel.findById(itemId);

    if (!purchasedPlan) {
      return res.status(404).json({
        success: false,
        message: 'Purchased plan not found',
      });
    }

    // Find the index of the object in the quantities array that contains the planId
    const quantitiesIndex = purchasedPlan.quantities.findIndex(qObj => qObj[planId] !== undefined);

    if (quantitiesIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Plan ID not found in quantities',
      });
    }

    // Get the quantities object at the found index
    const quantitiesObject = purchasedPlan.quantities[quantitiesIndex];

    // Reduce the quantity
    const currentQuantity = quantitiesObject[planId];
    const newQuantity = currentQuantity - quantityToReduce;

    if (newQuantity <= 0) {
      // Remove the planId from the quantities object
      delete quantitiesObject[planId];

      // Remove the quantities object from the array if it becomes empty
      if (Object.keys(quantitiesObject).length === 0) {
        purchasedPlan.quantities.splice(quantitiesIndex, 1);
      }

      // Also remove the associated subscription from the subscriptions array
      purchasedPlan.subscriptions = purchasedPlan.subscriptions.filter(
        (subscription) => subscription._id.toString() !== planId
      );
    } else {
      // Update the quantity
      quantitiesObject[planId] = newQuantity;
    }

    // If the subscriptions array becomes empty, delete the purchased plan
    if (purchasedPlan.subscriptions.length === 0) {
      await purchasedPlansModel.findByIdAndDelete(itemId);
      return res.status(200).json({
        success: true,
        message: 'Purchased plan deleted as no subscriptions remain',
      });
    }

    // Save the updated purchasedPlan using findOneAndUpdate
    const updatedPlan = await purchasedPlansModel.findOneAndUpdate(
      { _id: itemId },
      { $set: { quantities: purchasedPlan.quantities, subscriptions: purchasedPlan.subscriptions } }, // Update quantities and subscriptions
      { new: true } // Return the updated document
    );

    return res.status(200).json({
      success: true,
      message: 'Plan quantity updated successfully',
      plan: updatedPlan,
    });
  } catch (error) {
    console.error('Error while updating plan quantity:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Error while updating plan quantity',
    });
  }
};