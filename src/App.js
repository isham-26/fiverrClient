import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Add from './pages/add/Add'
import Gig from "./pages/gig/Gig"
import Gigs from "./pages/gigs/Gigs"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Messages from "./pages/messages/Messages"
import Message from "./pages/message/Message"
import Mygigs from "./pages/mygigs/Mygigs"
import Order from "./pages/orders/Orders"
import Register from "./pages/register/Register"

import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/gig/:id' element={<Gig/>}/>
        <Route path='/gigs' element={<Gigs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/message/:id' element={<Message/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/mygigs' element={<Mygigs/>}/>
        <Route path='/orders' element={<Order/>}/>
        <Route path='*' element={<h1>404 error page</h1>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
