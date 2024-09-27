import slugify from "slugify";
import subscriptionModel from "../../models/subscriptionModel.js";

export const createPlanController = async (req, res) => 
{
    try 
    {
        const { type, description, features, duration, price, icon} = req.body;

        console.log(req.body);
        
        if(!type) 
            {
                return res.send({message: "type name is required!"});
            }
            if(!description) 
            {
                return res.send({message: "description is required!"});
            }
            if(!features) 
            {
                return res.send({message: "features is required!"});
            }

            if (typeof price !== 'number') 
            {
                return res.status(400).send({
                    success: false,
                    message: "Price must be a number!"
                });
            }
            
            if (!duration) 
            {
                return res.send({ message: "duration size is required!" });
            }
            if (!icon) 
            {
                return res.send({ message: "icon information is required!" });
            }
          
        const existingPlan = await subscriptionModel.findOne({ type, duration });
        if (existingPlan) 
            {
            return res.status(200).send({
                success: false,
                message: "Plan with this type and duration already exists!"
            });
        }

        const plans = await new subscriptionModel(
        {
            type,
            description,
            duration,
            features,
            price,
            icon,
            slug: slugify(`${type}-${duration}`),  
        }).save();

      
        res.status(200).send({
            success: true,
            message: 'New subscription plan created!',
            plans,
        });
    } 
    catch (error) 
    {
        console.log(`create plan controller error = ${error}`);

        // Send error response
        res.status(500).send({
            success: false,
            message: 'Error occurred while creating subscription plan!',
            error
        });
    }
};
