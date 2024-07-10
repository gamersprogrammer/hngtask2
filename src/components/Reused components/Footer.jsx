import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Footer.css'

function Footer() {
  return (
    <>
      <div className="footer">
        <NavLink to={"/refund-policy"} className={'footerText'} >Refund Policy</NavLink>
        <NavLink to={"/privacy-policy"} className={'footerText'} >Privacy Policy</NavLink>
        <NavLink to={"/term-of-service"} className={'footerText'} >Terms of Service</NavLink>
        <NavLink to={"/contact"} className={'footerText'} >Contact Information</NavLink>
      </div>
    </>
  )
}

export default Footer