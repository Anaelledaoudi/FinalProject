import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import myImg from './assets/logotitle.png';
import { createContext, useState } from 'react';
import Redirect from './components/Redirect';

export const AppContext = createContext(null);


function App() {
  const [token,setToken]=useState('');
  return (
   <AppContext.Provider value={{token,setToken}}>
   
   <nav className='navbar'>
      <img src={myImg} className='logo'></img>
      <div>
        <Link to='/' style={{padding:'0 10px'}}>Home</Link>
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
    </Routes>
    </AppContext.Provider>
 
  );
}

export default App;
