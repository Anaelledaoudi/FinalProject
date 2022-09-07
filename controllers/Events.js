import db from '../connections/db.js';
import dotenv from 'dotenv';
import Sib from 'sib-api-v3-sdk';
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

  export const DelEvent=(req,res)=>{
    db('events')
    .delete()
    .where({event_id:req.params.id})
    .returning('*')
    .then(rows=>{
      res.json(rows)
    })
    .catch(e=>{
      console.log(e);
      res.status(404).json({msg:'not found'})
    })
  }

  export const GetEmail=(req,res)=>{
     db('events')
    .select('email')
    .where({event_id:req.params.id})
    .returning('*')
    .then(rows=>{
      const e=res.json(rows)
      console.log('row=>',rows);
      console.log('e=>',e);
      // SendEmail(e);
    })
    .catch(e=>{
      console.log(e);
      res.status(404).json({msg:'not found'})
  })
  }
// email sending api
  const SendEmail=(email)=>{
    const client=Sib.ApiClient.instance;
    const apiKey=client.authentications['api-key'];
    apiKey.apiKey=process.env.API_KEY;

    const tranEmailApi=new Sib.TransactionalEmailsApi()

    const sender={
    email:'heartshare1111@gmail.com',
    name:'HEARTSHARE'
}
    const receivers=[
    {
        email:'anaelledaoudi@gmail.com'
    }
]
    tranEmailApi.sendTransacEmail({
    sender,
    to:receivers,
    subject:'Heartshare thanks you, someone books!',
    textContent:`
    An organization book for your date, you can contact them at the mail: {{orgMail}} . Thanks for  your generosity!
    `,
    // htmlContent:`
    // <h1>HEARTSHARE thanks you</h1>
    // `
   }).then(console.log)
  .catch(console.log)
  }