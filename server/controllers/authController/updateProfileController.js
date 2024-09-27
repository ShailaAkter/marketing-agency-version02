import userModel from "../../models/userModel.js";
import { checkCapital, hashPassword } from "../../utils/authValidation.js";

export const updateProfileController = async (req, res) =>
{
    try
    {
        const {username, email, password, address, phone} = req.body;
        console.log(username);

        const user = await userModel.findOne({ email });

    
        //username validation
        if(!username)
        {
            return res.send({ message: "Username is Required"});
        }

        const user_name = checkCapital(username.trim());

        if(user_name.length < 2 || user_name.length > 20)
        {
            return res.send({ message: "Username must contain more than 2 character"});
        }

        //password valiation
        if(!password)
        {
            return res.send({message: "Previous or new password is required!"});
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

        const modified_address = checkCapital(address.trim());
    
        if(modified_address.length < 3 || modified_address.length > 100 )
        {
            return res.send({ message: "Address contain 3 character"});
        }

        //register a new user
        const hashedPassword = password? await hashPassword(password) : undefined;
        const updatedUser = await userModel.findByIdAndUpdate(user._id, 
        {
            username: user_name , 
            password: hashedPassword , 
            phone: phone,
            address: modified_address 
        }, {new: true});
        res.status(200).send({
            success: true, 
            message: "Profile updated successfully!",
            updatedUser
        })
    }
    catch(error)
    {
        console.log(`get update profile controller error = ${error}`)
        res.status(400).send({
            success: false,
            message: "Error while updating user profile!",
            error: error.message
        })
    }
}