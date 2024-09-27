import express from "express"
import { signUpController } from "../controllers/authController/signupController.js";
import { signInController } from "../controllers/authController/signinController.js";
import { forgotPasswordController } from "../controllers/authController/forgotPasswordController.js";
import {  getResetPasswordController, resetPasswordController } from "../controllers/authController/resetPasswordController.js";
import { updateProfileController } from "../controllers/authController/updateProfileController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { contactController } from "../controllers/authController/contactController.js";

//router object
const router = express.Router();

//protected route auth for user
router.get('/user-auth', requireSignIn, (req,res) =>
{
    res.status(200).send({ok:true})
})
    

//routing for sign up POST method
router.post('/sign-up', signUpController);

//routing for sign in POST method
router.post('/sign-in', signInController);

//routing for forgot password POST method
router.post('/forgot-password', forgotPasswordController);

//get reset password route by verificationCode
router.get('/reset-password/:verificationCode', getResetPasswordController);

//post reset password route
router.post('/reset-password', resetPasswordController);

//update profile route
router.put('/update-profile', requireSignIn, updateProfileController)

//
router.post("/contact-us", contactController);






export default router;
