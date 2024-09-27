import subscriptionModel from "../../models/subscriptionModel.js";

export const getAllPlanController = async (req, res) =>
{
    try
    {
        const plans = await subscriptionModel.find({});
        res.status(200).send({
            success: true,
            message: "All plan list",
            plans
        })
    }
    catch(error)
    {
        console.log(`get all plan controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured getting all plan!',
            error
        })
    }
}