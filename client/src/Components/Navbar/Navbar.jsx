import React, { useState } from 'react';

// import logo image
import Logo from '../../Assets/logo.png'

const Navbar = () => {
    // Use state on navbar to show or hide navbar

    return (
        <div className="navBar Flex">
            <div className="mainNavBar Flex">
                <div className="icon"></div>
                <div className="login">
                    <span> Sign In</span>
                    <span>Sign Up</span>
                </div>
            </div>

            <div className="">
                <div className="logo">
                    <img src="" className="imgLogo" />
                </div>
            </div>

            <div className=''>
                <ul className='menu Flex'>
                    <li onClick={ } className='navTabs'>Flights</li>
                    <li onClick={ } className='navTabs'>Hotel</li>
                    <li onClick={ } className='navTabs'>My Trips</li>
                </ul>

                <button className='btn contactBtn flex'> Contact </button>
            </div>

            <button className='btn contactbtn1'> Contact</button>

            <div onClick={ } className='toggleIcon'>
                <div className='icon'></div>
            </div>

        </div>
    )
}

export default Navbar