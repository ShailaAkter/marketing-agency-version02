import purchasedPlansModel from "../../models/purchasedPlansModel.js";
import userModel from "../../models/userModel.js";

export const createPurchasedPlanController = async(req, res) =>
{
    try
    {
        const { email, cart, quantities, total } = req.body;
    
        const user = await userModel.findOne({ email });
    
        if (!user) 
        {
            return res.status(404).json({
              success: false,
              message: "User not found with the provided email.",
            });
        }
    
        const clientId = user._id; 
      
        if (!cart || !quantities || !total || !clientId) 
        {
          return res.status(400).json({
            success: false,
            message: "Invalid request data. Please provide cart, quantities, total, and valid email.",
          });
        }
    
        const newOrder = await new purchasedPlansModel(
        {
            subscriptions: cart,          
            quantities: quantities,   
            totalAmount: total,       
            client: clientId,         
            payment: 
            {
              status: "active",      
            },
        }).save();
    
        return res.status(200).json({
            success: true,
            message: "Purchased successfully",
            order: newOrder,
        });
    }
    catch(error)
    {
        console.log(`Payment controller error: ${error}`);

        return res.status(500).json({
          success: false,
          message: "Error processing the purchasing plan.",
        });
    }
}