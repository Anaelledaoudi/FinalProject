import {useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import { axiosInstance } from '../config';

const Register = (props) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg,setMsg] = useState('')

  const navigate = useNavigate();

  useEffect(()=>{
    const bodyLog=document.body;
    bodyLog.classList.add('bodyLog');
  },[])

  const register = async (e) => {
    e.preventDefault();
    try{
      const result = await axiosInstance.post('/signup',{
        username,email,password
      });
      console.log(result);
      if(result.status==200){
        navigate('/signin')
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
      <p className='reg'>Register</p>
      <div>
      <form  onSubmit={register}>
        <input type='text' placeholder='Username'
                onChange={(e)=>setUsername(e.target.value)}/><br/>
        <input type='email' placeholder='email'
                onChange={(e)=>setEmail(e.target.value)}/><br/>
        <input type='password' placeholder='Password'
                onChange={(e)=>setPassword(e.target.value)}/><br/>
        <input type='submit' value='Register' className='regBtn'/>
      </form>
    
      {msg}
      </div>
    </div>
  )
}
export default Register
