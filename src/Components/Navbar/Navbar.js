import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from "react-router-dom";
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]=useState("home")

    const{getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
     <Link to='/'>
        <img src={assets.logo} alt='' className='logo' />
     </Link>
        <ul className='navbar-menu'>
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""} >Home </li>
            <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu </li>
            <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>MobileApp </li>
            <li onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""} >ContactUs </li>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt=''/>
            <div className='navbar-search-icon'>
             <Link to='/cart'>               
               <img src={assets.basket_icon} alt='' />
             </Link>

                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>SignIn </button>
        </div>
      
    </div>
  )
}

export default Navbar
