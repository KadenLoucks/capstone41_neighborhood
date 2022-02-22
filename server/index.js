import express from "express";
import bodyPaser from "body-parse";
import mongoose from "mongoose";
import cors from "cors";

//init app
const app=express();

app.use(bodyPaser.json({limit:"30mb",extended:true}));
app.use(bodyPaser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

//connection string into MongoDB
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://haomin:haomin@minineighbourhood.krps8.mongodb.net/MiniNeighbourhood?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});