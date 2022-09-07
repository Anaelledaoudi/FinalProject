import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react'
import './Home.css'
const Home=(props)=>{
    const navigate = useNavigate();

    useEffect(()=>{
      // const body=document.body;
      // body.className.add('bodyHome');
    },[])

 return(
    <>
    <div className='pic'>
        {/* <h1>Your leftovers could be their meal</h1> */}
        <p>Thank you for bringing them some of your joy!</p>
        <button className='btn' onClick={()=>navigate('/signup')}>Join</button>
    </div>
    <div className='img'>
      <div className='explanation'>
        <h4>Join our community!</h4>
        <p>We bring all the leftovers to people in needed, instead of beeing throwing we redirect everything to people that needed the most. By doing this you help family, childrens... And it doesnt cost anything for you! All what you have to do is to register and then an oganization will come and redirect all the food at the end of your event to familys! You will receive a paper 42 that will deduct the taxes! It's exactly like to do a donation, just that it costs nothing ! </p>
      </div> 
    </div>
    <div className='imgexplain'>
       <div id='img1'></div>
       <div id='img2'></div>
       <div id='img3'></div>
    </div>
   
    </>
 )
}
export default Home;