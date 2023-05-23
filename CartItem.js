import React from 'react';
import './CartItem.css';
import {Link} from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa";
const CartItem = () => {
  return (
    <div className="cartitem">
    <div className="cartitem__image">
      <img src={"https://www.medispace.tn/image/cache/data/hygiene-intime/11839-svr-topialyse-gel-lavant-1l-500x500.jpg"} alt={'SVR TOPIALYSE GEL LAVANT FLACON POMPE 1L'} />
    </div>
    <Link to={`/product/${111}`} className="cartItem__name">
      <p>Product 1</p>
    </Link>
    <p className="cartitem__price">$100</p>
    <select className='cartItem__select'  >
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    </select>
    <button className="cartItem__deleteBtn"  >
      <i><FaTrashAlt/></i>
    </button>
  </div>
  )
}
export default CartItem;