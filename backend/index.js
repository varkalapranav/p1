import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import Routes from "./routes/custRoutes.js";
import cors from 'cors';

const app=express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended:true}));
connectDb();
const port = process.env.PORT || 4000;

app.use("/api/customers",Routes);


app.listen(port,()=>{console.log(`server running at ${port}`)});