import axios from 'axios';
import {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../App';

const Login=(props)=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg,setMsg]=useState('');

    const {setToken}=useContext(AppContext)

    const navigate=useNavigate();

    const login= async (e)=>{
      e.preventDefault();
      try{
        const result=await axios.post('/signin',{
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
    <div style={{
            margin:'5px auto',
            width:'300px',
            textAlign:'left'}}>
       <h2>Log in</h2>
       <form onSubmit={login}>
          <input type='email' placeholder='email'
                onChange={(e)=>setEmail(e.target.value)}/><br/>
          <input type='password' placeholder='Password'
                onChange={(e)=>setPassword(e.target.value)}/><br/>
          <input type='submit' value='Login' />
       </form>
    </div>
    )
   }
   export default Login;
