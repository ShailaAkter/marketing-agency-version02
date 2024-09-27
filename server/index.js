import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js';
import planRoutes from './routes/planRoutes.js'
import connectDB from './config/db.js';  

import cors from 'cors'

//confugure environment variable
dotenv.config();

//database configuration
connectDB();

//port 
const PORT = process.env.PORT || 5000;

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


//*all routes
//auth routes
app.use('/api/v1/auth', authRoutes);

//subscription plan route
app.use('/api/v1/plans', planRoutes);


//rest api
app.get('/', (req, res) =>
{
    res.send("<h1>Welcome to WatchTime Store</h1>");
})

//run listen
app.listen(PORT, () =>
{
    console.log(`Server running on ${PORT}`);
})
