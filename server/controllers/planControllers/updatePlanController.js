import purchasedPlansModel from "../../models/purchasedPlansModel.js";

export const updatePlanController = async (req, res) =>
    {
        const { planId, itemId } = req.params;  // Get the subscription and item ID from params
      
        try {
          // Find the purchased plan containing the subscription
          const purchasedPlan = await purchasedPlansModel.findOne({
            _id: itemId,
            subscriptions: planId  // Check if this purchased plan contains the subscription
          });
      
          if (!purchasedPlan) {
            return res.status(404).json({ success: false, message: "Plan not found" });
          }
      
          // Find the subscription in the subscriptions model
          const subscription = await Subscription.findById(planId);
          if (!subscription) {
            return res.status(404).json({ success: false, message: "Subscription not found" });
          }
      
          // Check if the subscription is monthly and update it to yearly
          if (subscription.duration === "monthly") {
            subscription.duration = "yearly";
            subscription.price = updatedPrice;  // Set the new price for yearly subscription (define `updatedPrice`)
          } else {
            return res.status(400).json({ success: false, message: "Subscription is already yearly" });
          }
      
          // Save the updated subscription
          await subscription.save();
      
          res.status(200).json({ success: true, message: "Subscription updated to yearly" });
      
        } catch (error) {
          console.error("Error while updating subscription: ", error);
          res.status(500).json({ success: false, message: "Internal server error" });
        }
      }