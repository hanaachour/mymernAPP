import React, { useEffect } from 'react'
import { useDispatch, useSelector,  } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/Slices/UserSlice';
import "./NavBar.css";
import { BsCart } from "react-icons/bs";
import { FcRegisteredTrademark } from "react-icons/fc";
import { AiOutlineLogin } from "react-icons/ai";

function NavBar(props) {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const logoutHandler=(e)=>{
    e.preventDefault();
    dispatch(logout(navigate))
  }
  useEffect(() => {}, [dispatch]);
  const{userLoggedIn}=useSelector((state)=>state.userAuth);
  console.log(userLoggedIn);
  return (

    <nav className="navbar">
      <div className="navbar__logo">
        <h2>My Para Shop</h2>
      </div>
      <div  >
     {userLoggedIn?.found && (
     <div> <button  className='button'onClick={logoutHandler}>LOGOUT</button></div>
     )}
    </div>
      <ul className="navbar__links">
        <li>
          <Link to="/product/carts" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge"><BsCart/></span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/user/register" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
             Register <span className="cartlogo__badge"><FcRegisteredTrademark/></span>
            </span>
          </Link>
          </li>
        <li>
          <Link to="/user/login" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
             Login <span className="cartlogo__badge"><AiOutlineLogin/></span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

    </nav>



   
    
  )
}
export default NavBar;