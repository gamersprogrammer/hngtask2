import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FontAwesomeIcons';
import '../css/Cart.css'
import { NavLink } from 'react-router-dom';
function Cart() {
  return (
    <>
        <div className="topText">
            <h2>Your Cart</h2>
            <NavLink to="/" className={'nav'}><p>continue shopping</p></NavLink>
        </div>
        <div className="product">
            <h4>PRODUCT</h4>
            <h4 className='notshow'>QUANTITY</h4>
            <h4>TOTAL</h4>
        </div>
        <div className="checkout">
            <div className="image">
                <img src="/images/Rectangle 1 (1).png" alt="" />
                <div className="imagesText">
                <p>Air Jordans</p>
                <p>Size: Small</p>
                </div>
            </div>
            <div className="icons">
                <button>           
                    <FontAwesomeIcon icon="fa-solid fa-minus" className='innerButton' />
                </button>
                <button>                        
                    <FontAwesomeIcon icon="fa-solid fa-plus" className='innerButton'/>
                </button>
            </div>
            <div className="total">
                <p>450,000</p>
            </div>
        </div>
        <div className="subtotal">
            <div className="subText">
            <h4>SUBTOTAL</h4>
            <p>450,000</p>
            </div>
            <div className="btn">
                <button className='checkoutbtn'>CHECKOUT</button>
            </div>
        </div>
    </>
  )
}

export default Cart