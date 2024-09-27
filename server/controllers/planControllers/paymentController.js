import Stripe from 'stripe';
import dotenv from "dotenv";
import userModel from '../../models/userModel.js';
import purchasedPlansModel from '../../models/purchasedPlansModel.js';
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export const createPaymentIntentController = async (req, res) => 
{
    try 
    {
        const { total } = req.body;
        if (total < 50) 
        {
            return res.status(400).json({
              success: false,
              message: `Amount must be at least ${50 / 100}}.`,
            });
          }
        

        const paymentIntent = await stripe.paymentIntents.create(
        {
            amount: total, 
            currency: 'usd',
        });
  
        res.json({ clientSecret: paymentIntent.client_secret });    
    } 
    catch (error) 
    {
        console.log(`create payment intent error = ${error}`);
        res.status(500).send(error);
    }
  };

export const confirmPaymentController = async (req, res) => 
{
    try 
    {
      const { paymentIntentId, email, cart, quantities, total } = req.body;
  
      // Validate request data
        if (!paymentIntentId || !email || !cart || !quantities || !total) 
        {
            return res.status(400).json({
                success: false,
                message: "Invalid request data.",
        });
        }
  
      // Retrieve user by email
      const user = await userModel.findOne({ email });
  
        if (!user) 
        {
            return res.status(404).json({
                success: false,
                message: "User not found with the provided email.",
            });
        }
  
      const clientId = user._id;
  
      // Confirm the PaymentIntent
      const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
  
        if (paymentIntent.status === 'succeeded') 
        {
            const newSubscriptionPlans = await new purchasedPlansModel({
                subscriptions: cart.map(sub => sub._id),
                quantities: quantities,
                totalAmount: total,
                payment: paymentIntent,
                client: clientId 
            }).save();
  
            return res.status(200).json({
                success: true,
                message: "Payment confirmed successfully",
                plans: newSubscriptionPlans,
            });
        } 
        else 
        {
            return res.status(400).json({
                success: false,
                message: "Payment not successful.",
            });
        }
    } 
    catch (error) 
    {
        console.error("Error confirming payment:", error);
        return res.status(500).json({
            success: false,
            message: "Error processing the payment.",
      });
    }
  };