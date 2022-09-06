import db from '../connections/db.js';
import dotenv from 'dotenv';
dotenv.config();

export const AddEvent=(req,res)=>{
   const {eventname, email, eventdate, username, imageurl} = req.body;

   console.log(req.body);
   
   db('events')
  .insert(req.body)
  .returning('*')
  .then(rows=>{
    res.json(rows)
  })
  .catch(e=>{
    console.log(e);
    res.status(404).json({msg:'check your details'})
  })

}

export const GetEvents = (req, res) =>{
    db('events')
    .select('event_id','eventname','email','eventdate','username', 'imageurl')
    .then(rows=>{
      res.json(rows)
    })
    .catch(e=>{
      console.log(e);
      res.status(404).json({msg:'not found'})
    })
  }
