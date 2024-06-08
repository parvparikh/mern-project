import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
//import cors from 'cors';

console.log('its definately taking');
dotenv.config();
console.log('time here right');
mongoose.connect(process.env.MONGO).then(
    () => {console.log("Database connected!!");}).catch((err) => {console.log(err);});
console.log(' or here 13 time here right');

const app = express();

/*app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }));*/

app.use(express.json());

app.listen(3000, () => {
    console.log("Server running on 3000!!!");
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error!";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });

})