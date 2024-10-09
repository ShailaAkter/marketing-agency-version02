import nodemailer from "nodemailer";
import { body, validationResult } from "express-validator";

// A simple email validation function
const checkEmail = (email) => 
{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const contactController = async (req, res) => 
{
    try 
    {
        const { name, email, message } = req.body;

        // Input validation
        if (!name || name.trim().length < 2) 
        {
            return res.send({ message: "Name is required and must be at least 2 characters long." });
        }

        if (!email || !checkEmail(email)) 
        {
            return res.send({ message: "Valid email is required!" });
        }

        if (!message || message.trim().length < 10) 
        {
            return res.send({ message: "Message is required and must be at least 10 characters long." });
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) 
        {
            return res.status(400).json({ errors: errors.array() });
        }

        // Set up Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587, 
            auth: 
            {
                user: process.env.AUTH_EMAIL,
                pass: process.env.AUTH_PASS,
            },
          });



        //?if you want to use gmail use authenticated email for AUTH_EMAIL and create app password for AUTH_PASSWORD then use below code to get mail in gmail. 
        /*
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465, 
            secure: true, 
            auth: 
            {
              user: process.env.AUTH_EMAIL,
              pass: process.env.AUTH_PASS, 
            },
          });
        */

        // Setup email options
        const mailOptions = 
        {
            from: email,
            to: process.env.AUTH_EMAIL, 
            subject: `Contact Form Submission from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Success response
        return res.status(200).send({
            success: true,
            message: "Your message has been sent successfully!",
        });
    } 
    catch (error) 
    {
        console.error(`Contact controller error: ${error.message}`);

        return res.status(500).send({
            success: false,
            message: "Failed to send your message. Please try again later.",
            error: error.message, // Provide error message for better debugging
        });
    }
};
