import {useNavigate} from 'react-router-dom';

const Redirect=(props)=>{
    const navigate = useNavigate();
    return(
       <>
         <h2>Redirect</h2>
         <h4>Continue as:</h4>
         <div>
            <button onClick={()=>navigate('/addEvent')}>Event</button>
            <button onClick={()=>navigate('/calEvent')}>Organization</button>
         </div>
       </>
    )
   }
   
   export default Redirect;