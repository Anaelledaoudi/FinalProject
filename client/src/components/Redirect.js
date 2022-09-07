import {useNavigate} from 'react-router-dom';

const Redirect=(props)=>{
    const navigate = useNavigate();
    return(
       <>
         <div className='redirect'>
            <h4>Continue as:</h4>
         <div>
            <button className='btnredir' onClick={()=>navigate('/addEvent')}>Event</button>
            <button className='btnredir' onClick={()=>navigate('/calEvent')}>Organization</button>
         </div>
         </div>
         
       </>
    )
   }
   
   export default Redirect;