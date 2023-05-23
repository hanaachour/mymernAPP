import React from 'react'
// import { Link } from 'react-router-dom';
import './Cart.css';
import CartItem from '../Components/CartItem';
const Cart = () => {
  return (
  
    <div >
        <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>
<CartItem/>
<CartItem/>
<CartItem/>
<CartItem/>
            {/* <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div> */}
      
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal {0}€ items</p>
            <p>$</p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
   








    </div>
  )
}
export default Cart;