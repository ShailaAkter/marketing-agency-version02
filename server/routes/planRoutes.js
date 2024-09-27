import express from "express"

import { createPlanController } from "../controllers/planControllers/createPlanController.js";
import { getAllPlanController } from "../controllers/planControllers/getAllPlanController.js";
import { createPurchasedPlanController } from "../controllers/planControllers/createPurchasedPlanController.js";
import { getPurchasedPlanController } from "../controllers/planControllers/getPurchasedPlanController.js";
import { confirmPaymentController, createPaymentIntentController } from "../controllers/planControllers/paymentController.js";
import { cancelPlanController } from "../controllers/planControllers/cancelPlanController.js";
import { updatePlanController } from "../controllers/planControllers/updatePlanController.js";
import { createFreePlanController, getFreePlansController, getSubscribedFreePlansController, subscribeFreePlanController } from "../controllers/planControllers/freePlanController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";


//router object
const router = express.Router();

//routing for creating subscription plans
router.post('/create-plan',  createPlanController);

//routing for creating subscription plans
router.post('/create-free-plan', createFreePlanController);

//routing for creating subscription plans
router.post('/subscribe-free-plan', subscribeFreePlanController);

//routing for creating subscription plans
router.get('/subscribe-free-plans/:email', getSubscribedFreePlansController);

//routing for get all subscription plans
router.get('/get-plans', getAllPlanController);

//routing for get all subscription plans
router.get('/get-free-plans', getFreePlansController);

//routing for get invoice information
router.post('/purchased-plans',  createPurchasedPlanController);

//routing for get invoice information
router.get('/purchased-plans/:email',  getPurchasedPlanController);

//routing for create payment-intent information
router.post('/create-payment-intent',  createPaymentIntentController);

//routing for create purchased plans by confirming payment
router.post('/confirm-payment', requireSignIn,  confirmPaymentController);

//routing for create purchased plans by confirming payment
router.put('/cancel-plan/:planId/:itemId',  cancelPlanController);

//routing for create purchased plans by confirming payment
router.put('/update-plan/:planId/:itemId',  updatePlanController);





export default router;
