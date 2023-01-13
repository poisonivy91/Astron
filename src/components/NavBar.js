 import React from 'react'
 import './NavBar.css'
 import {FaBars, FaTimes} from 'react-icons/fa'
 
 function NavBar() {
   return (
     <div className='header'>
        <div className='container'>
            <h1><span className='primary'>As</span>tron</h1>
            <ul className='nav-menu'>
                <li> 
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <a href='/'>Feature</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
            </ul>
            <div className='btn-group'>
                <button className='btn '> Connect Wallet</button>
            </div>
            <div className='hamburger'>
                <FaBars size={20} style={{color: '#333'}}/>
            </div>
        </div>
     </div>
   )
 }
 
 export default NavBar