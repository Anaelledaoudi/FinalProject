// import './input.css';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import myImg from './assets/log.png';
import { createContext, useState } from 'react';
import Redirect from './components/Redirect';
import EventHome from './components/EventHome';
import OrganisationHome from './components/OrganisationHome';
import Example from './components/Cal.jsx';

export const AppContext = createContext(null);


function App() {
  const [token,setToken]=useState('');
  return (
   <AppContext.Provider value={{token,setToken}}>
   
   <nav className='navbar'>
      <img src={myImg} className='logo'></img>
      <div>
        <Link to='/' style={{padding:'0 10px'}} className='home'>HEARTSHARE</Link>
      </div>
      <div className='sign'>
        <Link to='/signin' style={{padding:'0 10px'}}>SignIn</Link>
        <Link to='/signup' style={{padding:'0 10px'}}>SignUp</Link>
      </div>
      
   </nav>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signin' element={<Login />} />
      <Route path='/signup' element={<Register />} />
      <Route path='/redirect' element={<Redirect/>} />
      <Route path='/event' element={<EventHome/>} />
      <Route path='/organisation' element={<OrganisationHome/>} />
      <Route path='/cal' element={<Example/>} />
    </Routes>
    </AppContext.Provider>
 
  );
}

export default App;