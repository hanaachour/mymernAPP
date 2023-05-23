import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { ToastContainer } from 'react-toastify';
import AllUsers from './Pages/AllUsers';
import AddPost from './Pages/AddPost';
import AddProduct from './Pages/AddProduct';

import WishList from './Pages/WishList';
import ProductScreen from './Pages/ProductScreen';
import Cart from './Pages/Cart';

function App() {
  return (
    <div className="App">
 
   <BrowserRouter>
   <ToastContainer/>
   <NavBar/>
   <br/>
   <br/>
   <br/>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addPost' element={<AddPost/>}/>
      {/* user */}
      <Route path='/user/register' element={<Register/>}/>
      <Route path='/user/login' element={<Login/>}/>
      <Route path="users" element={<AllUsers />} />
      {/* products */}
      <Route path='/product/addProduct' element={<AddProduct/>}/>
      <Route path='/product/carts' element={<Cart/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
      <Route path='/product/productScreen' element={<ProductScreen/>}/>
 
   </Routes>
 
   </BrowserRouter>
   
    </div>
  );
}

export default App;

