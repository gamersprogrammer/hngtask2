import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FontAwesomeIcons';
import '../css/Navbar.css'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
        <div className="header">
            <div className="imagelogo">
                <img src="/images/seller.png" alt="seller logo" />
            </div>
            <div className="navLinks notshow">
                <NavLink to={'/'} className={'button'}>Home</NavLink>
                <NavLink to={'/cart'} className={'button'}>Products</NavLink>
                <NavLink to={'/billing-details'} className={'button'}>Contacts</NavLink>
            </div>
            <div className="navIcons">
                <div><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></div>
                <div><FontAwesomeIcon icon="fa-solid fa-bars" /></div>
                <div><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></div>
            </div>
        </div>
    </>
  )
}

export default Header