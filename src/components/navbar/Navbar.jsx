import React, { useEffect, useState } from 'react'
import "./navbar.scss"
import img from "../../assets/profile.png"
import {Link, useLocation} from "react-router-dom"
const Navbar = () => {
    const [active,setActive] = useState(false);
    const [open,setOpen] = useState(false);
    const {pathname}=useLocation()

    const isactive=()=>{
        window.scrollY >0 ? setActive(true) : setActive(false)
    }
    useEffect(()=>{
        window.addEventListener("scroll",isactive)
        return (()=>{
            window.removeEventListener("scroll",isactive)
        })
    },[])
    const currentUser={
        id:1,
        isSeller:true,
        username:"isham gupta"
    }
  return (
    <div className={active || pathname!=="/" ? "active navbar" : "navbar"}>
       <div className="container">
           <div className="logo">
             <Link to="/" className="link">
                <span className='text'>fiverr.</span>
             </Link>
           </div>
          <div className="links">
              <span>Fiver Bussiness</span>
              <span>Exploer</span>
              <span>English</span>
              <span>Sign in</span>
              {!currentUser?.isSeller && <span>Become a seller</span>}
              {!currentUser && <button>join</button>}
              {currentUser && (
                 <div className="user" onClick={()=>setOpen(!open)}>
                    <img src={img} alt="user img" />
                    <span>{currentUser?.username}</span>
                    {open && <div className="options">
                        {
                            currentUser?.isSeller && (
                                <>
                                    <Link to="/mygigs" className="link">Gigs</Link>
                                    <Link to="/add" className="link">Add new gigs</Link>
                                </>
                            )
                        }
                        <Link to="/orders" className="link">Orders</Link>
                        <Link to="/messages" className="link">messages</Link>
                        <Link to="/login" className="link">Logout</Link>
                    </div>}
                 </div>
              )}
          </div>
       </div>
       { (active || pathname!=="/") && (
        <><hr/>
            <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
            </div>
            <hr/>
        </>
       )}
    </div>
  )
}

export default Navbar