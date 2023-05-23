import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slices/UserSlice'
import postReducer from './Slices/PostSlice'
import productReducer from "./Slices/ProductSlice";
const store = configureStore({
    reducer: { userAuth:userReducer,postRed:postReducer,products:productReducer},
    
  });
  export default store;