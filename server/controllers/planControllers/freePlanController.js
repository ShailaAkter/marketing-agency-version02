import slugify from "slugify";
import freePlanModel from "../../models/freePlanModel.js";
import userModel from "../../models/userModel.js";
import freeSubscriptionModel from "../../models/freeSubscriptionModel.js";

export const createFreePlanController = async (req, res) => 
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
          
        const existingPlan = await freePlanModel.findOne({ type, duration });
        if (existingPlan) 
            {
            return res.status(200).send({
                success: false,
                message: "Plan with this type and duration already exists!"
            });
        }

        const plans = await new freePlanModel(
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


export const getFreePlansController = async (req, res) =>
    {
        try
        {
            const plans = await freePlanModel.find({});
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

export const subscribeFreePlanController = async (req, res) => 
    {
        try {
            const { type, description, features, duration, price, icon, email } = req.body;
    
            // Validate required fields
            if (!type || !description || !features || !icon || !email) {
                return res.status(400).send({ message: "All required fields must be filled!" });
            }
            if (typeof price !== 'number') {
                return res.status(400).send({ message: "Price must be a number!" });
            }
            if (!duration) {
                return res.status(400).send({ message: "Duration is required!" });
            }
    
            // Find the user by email
            const user = await userModel.findOne({ email });
            if (!user) {
                return res.status(404).send({ message: "User not found!" });
            }
    
            // Check if a similar plan already exists for the user
            const existingPlan = await freeSubscriptionModel.findOne({ type, duration, client: user._id });
            if (existingPlan) {
                return res.status(400).json({ message: "You already have this plan!", planExists: true });
            }
            // Create a new free subscription plan
            const newPlan = new freeSubscriptionModel({
                type,
                description,
                duration,
                features,
                price,
                icon,
                client: user._id, // Link the plan to the user
                slug: slugify(`${type}-${duration}`),
            });
    
            // Save the plan
            await newPlan.save();
    
            res.status(201).send({
                success: true,
                message: "Free subscription plan created!",
                plan: newPlan,
            });
        } catch (error) {
            console.log(`Error creating plan: ${error}`);
            res.status(500).send({
                success: false,
                message: "Error occurred while creating the subscription plan!",
                error
            });
        }
    };


export const getSubscribedFreePlansController = async (req, res)=>     
    {
        {
            try {
              const { email } = req.params; // Ensure this matches your route setup
              const user = await userModel.findOne({ email });
          
              if (!user) {
                return res.status(404).json({ success: false, message: "User not found." });
              }
          
              const plans = await freeSubscriptionModel.find({ client: user._id });
              res.status(200).json({ success: true, plans });
            } catch (error) {
              console.error("Error fetching free subscription plans:", error);
              res.status(500).json({ success: false, message: "Server error", error });
            }
          };
        }