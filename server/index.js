
<<<<<<< HEAD
import postRoutes from './routes/posts.js';

//init app
const app=express();


app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/posts', postRoutes);
//connect app with database
const CONNECTION_URL = "mongodb+srv://kaden:kaden@minineighbourhood.krps8.mongodb.net/miniNeighbourhood?retryWrites=true&w=majority";
const PORT=process.env.PORT||5000;
mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(PORT,()=>console.log('server running on port:'+PORT)))
.catch((error)=>console.log(error.message));
=======
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://qianli:qianli@minineighbourhood.krps8.mongodb.net/miniNeighbourhood?authSource=admin&replicaSet=atlas-a736tq-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
>>>>>>> c57b9c2d2542f9f4d9fb644b60bcdef07b0b2588
