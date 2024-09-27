import purchasedPlansModel from "../../models/purchasedPlansModel.js";
import userModel from "../../models/userModel.js";

export const getPurchasedPlanController = async(req, res) =>
{
    try
    {
        const { email } = req.params;  
        const user = await userModel.findOne({ email });

        if (!user) 
        {
            return res.status(404).json({
                success: false,
                message: "User not found with the provided email.",
            });
        }
        
        const clientId = user._id; 



        const subscriptions = await purchasedPlansModel.find({client: clientId})
        .populate("subscriptions")
        .populate("client","username")
        .sort({ createdAt: -1 });
        res.status(200).send({
            success: true,
            message: "Purchased plans fetched successfully",
            subscriptions
        });
    }
    catch(error)
    {
        console.log(`Get purchased plans controller error = ${error}`);
        res.status(500).send({
            success: false,
            message: "Error while getting orders",
            error
        })
    }
} 

