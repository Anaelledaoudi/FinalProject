import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = (props) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg,setMsg] = useState('')

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try{
      const result = await axios.post('/signup',{
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
      <h2>Register</h2>
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
