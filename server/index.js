import express from "express";
import bodyPaser from "body-parse";
import mongoose from "mongoose";
import cors from "cors";

//init app
const app=express();

app.use(bodyPaser.json({limit:"30mb",extended:true}));
app.use(bodyPaser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());