import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import users_router from './routes/Users.js'
import events_router from './routes/Events.js'
import Sib from 'sib-api-v3-sdk';
dotenv.config();

const app=express();




app.listen(process.env.PORT||8080, ()=>{
    console.log(`run on port ${process.env.PORT||8080}`);
   })

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(users_router);
app.use(events_router);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

// "proxy": "http://localhost:5000",

