import express  from "express";
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';

const app = express();
dotenv.config();

app.use(express)

app.use("/users", userRoutes)
app.use("/auth", authRoutes)

app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Running on ${process.env.PORT || 8080}`);
})