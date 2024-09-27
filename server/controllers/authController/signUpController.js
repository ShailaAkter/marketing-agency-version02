import userModel from "../../models/userModel.js";
import { checkCapital, checkEmail, hashPassword } from "../../utils/authValidation.js";

export const signUpController = async(req, res) =>
{
    try
    {
        const {username, email, password, phone, address} = req.body;

        //username validation
        if(!username)
        {
            return res.send({ message: "Username is Required"});
        }

        const trimedUsername = checkCapital(username.trim());

        if(trimedUsername.length < 2 || trimedUsername.length > 20)
        {
            return res.send({ message: "Firstname must contain more than 2 character"});
        }

        //email validation
        if(!email)
        {
            return res.send({message: "Email is required!"});
        }

        if(checkEmail(email) === false)
        {
            return res.send({message: "Please insert correct email format!"});
        }

        //password valiation
        if(!password)
        {
            return res.send({message: "Password is required!"});
        }
        if(password.length < 6 || password.length > 12)
        {
            return res.send({message: "Password must contain 6 character!"});
        }
        
        //phone validation
        if(!phone)
        {
            return res.send({message: "Phone is required!"});
        }

        if(phone.lenght < 6 || phone.length > 12)
        {
            return res.send({ message: "Invalid Phone number"});
        }

        //address validation
        if(!address)
        {
            return res.send({message: "Address is required!"});
        }

        const trimmedAddress = checkCapital(address.trim());

        if(trimmedAddress.length < 3 || trimmedAddress.length > 100 )
        {
            return res.send({ message: "Address contain 3 character"});
        }

        const modifiied_verification_code = Math.random().toString(36).slice(-10);

        //check existing user
        const existingUser = await userModel.findOne({email});
        if(existingUser)
        {
            return res.status(200).send({
                success: true,
                message: "User is already been registered, please Login!"
            });
        }

        //register a new user
        const hashedPassword = await hashPassword(password);

        //save new user
        const user = await new userModel({
            username: trimedUsername, 
            email, password: hashedPassword, 
            phone, 
            address: trimmedAddress, 
            verificationCode: modifiied_verification_code
        }).save();

        res.status(200).send({
            success: true,
            message: "User has been registered successfully!", 
            user
        });

    }
    catch(error)
    {
        console.log(`register controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while registering User!",
            error
            
        })
    }
};