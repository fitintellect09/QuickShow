import express from 'express'
import cors from 'cors'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"
import 'dotenv/config'
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
const app=express()
const port=3000;
 await connectDB()
//MIDDLEWARE
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())
//API ROUTES
app.get('/',(req,res)=>res.json({response:"hello"}))
// Set up the "/api/inngest" (recommended) routes with the serve handler
app.use("/api/inngest", serve({ client: inngest, functions }));

app.listen(port,()=>console.log(`Server is listening at http://localhost:${port}`))