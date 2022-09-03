import db from '../connections/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const Register = async (req,res) => {
    const {username, email, password} = req.body;
    console.log(req.body);
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    req.body.password = hash;
    
    db('userss')
    .insert(req.body)
    .returning('*')
    .then(rows=>{
    res.json(rows)
  })
    .catch(e=>{
    console.log(e);
    res.status(404).json({msg:'Email Exist'})
  })
}

export const Login=(req,res)=>{
  const {email,password}=req.body;
  db('userss')
  .select('user_id','username','email','password')
  .where({email:email})
  .then(async row => {
    if(row.length === 0){
      return res.status('404').json({msg:'Email not exist'})
    }
    const match = await bcrypt.compare(password,row[0].password);
    if(!match) return res.status('400').json({msg:'Wrong password'})
    
    const userid = row[0].user_id;
    const useremail = row[0].email;
    const username = row[0].username;
    
    const token = jwt.sign({userid,useremail,username},process.env.TOKEN_SECRET,{
      expiresIn: '30s'
    });
    
    res.cookie('token',token, {
      httpOnly:true,
      maxAge:30 * 1000
    });

    res.json(token)

  })
  .catch(e=>{
    res.status(404).json({msg:'Something went wrong, please try later'})
  })
}

