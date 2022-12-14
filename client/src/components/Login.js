import axios from 'axios';
import {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

import { AppContext } from '../App';
import { axiosInstance } from '../config';

const Login=(props)=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg,setMsg]=useState('');

    const {setToken}=useContext(AppContext)

    const navigate=useNavigate();

    const login= async (e)=>{
      e.preventDefault();
      try{
        const result=await axiosInstance.post('/signin',{
            email,password
        });
        console.log(result.data);
        if(result.status==200){
            setToken(result.data);
            navigate('/redirect')
        }
      }
      catch(e){
        setMsg(e.response.data.msg)
      }
    }
    return(
    <div className='form' style={{
            margin:'5px auto',
            width:'300px',
            textAlign:'left'}}>
       <p className='reg'>Log in</p>
       <form onSubmit={login}>
          <input type='email' placeholder='email'
                onChange={(e)=>setEmail(e.target.value)}/><br/>
          <input type='password' placeholder='Password'
                onChange={(e)=>setPassword(e.target.value)}/><br/>
          <input type='submit' value='Login' className='regBtn'/>
       </form>
    </div>
    )
   }
   export default Login;
