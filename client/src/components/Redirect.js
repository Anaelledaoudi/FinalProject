import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import './Redirect.css';

const Redirect=(props)=>{

   useEffect(()=>{
      const body=document.body;
      body.classList.add('bodyHome');
    },[])

    const navigate = useNavigate();
    return(
       <>
         <div className='redirect'>
            <p className='title'>Continue as</p>
         <div className='redirbtns'>
            <button className='btnredir' id='b1' onClick={()=>navigate('/addEvent')}>Event</button>
            <button className='btnredir' id='b2' onClick={()=>navigate('/calEvent')}>Organization</button>
         </div>
         </div>
         
       </>
    )
   }
   
   export default Redirect;