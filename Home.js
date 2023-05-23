import React from 'react'
import { useSelector } from 'react-redux';
import Product from '../Components/Product';
import "./Home.css";

 const Home = () => {
   //THIS IS FALSE// const { found } = useSelector((state) => state.userAuth.userLoggedIn);
   const { userAuth } = useSelector((state) => state);

  return (
     // THIS IS FALSE// <div>{found ? `Welcome${found?.name}` : "EveryOne"}</div>
    <div className="homescreen" >
         <h1 style={{color:'pink'}}>
      {userAuth?.userLoggedIn?.found
        ? `Welcome ${userAuth?.userLoggedIn?.found.name}`.toUpperCase()
        : "Welcome EveryOne"}
        </h1>
       
        <div >
      <h2 className="homescreen__title">Those Are Our Latest Products</h2>
      <div className="homescreen__products">
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      </div>
    </div>
    </div>
  )
}
export default Home;