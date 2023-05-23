import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts=createAsyncThunk(
  "/getAllProducts",
  async()=>{
    try{
      const { data } = await axios.get(
                  "http://localhost:5000/product/getAllProducts",
                
                );
                return data;
    }catch (error) {
            return console.log(error);
  }}
)


const productSlice = createSlice({
      name: "products",
      initialState: {},
      extraReducers: {
        [getAllProducts.pending]: (state, action) => {
          state.loading = true;
        },
        [getAllProducts.fulfilled]: (state, action) => {
          state.loading = false;
          state.gotAllProducts = action?.payload;
          state.appErr = undefined;
          state.serverErr = undefined;
        },
        [getAllProducts.rejected]: (state, action) => {
          state.loading = false;
          state.appErr = action?.payload?.message;
          state.serverErr = action?.error?.message;
        },
      },
    });

//  export const createProduct = createAsyncThunk(
//     '/addProduct',
//      async ({ formValue }, { rejectWithValue, getState }) => {
//               try {
//         const userAuth = getState()?.userAuth;
//         const { userLoggedIn } = userAuth;
//         const config = {
//           headers: { Authorization: `Bearer ${userLoggedIn?.token}` },
//         };
//         const { data } = await axios.post(
//           "http://localhost:5000/product/addProduct",
//           formValue,
//           config
//         );
//         return data;
//       } catch (error) {
//         return rejectWithValue(error?.response?.data);
//       }
//     }
//   );
  
//   const productSlice = createSlice({
//     name: "products",
//     initialState: {},
//     extraReducers: {
//       [createProduct.pending]: (state, action) => {
//         state.loading = true;
//       },
//       [createProduct.fulfilled]: (state, action) => {
//         state.loading = false;
//         state.productCreated = action?.payload;
//         state.appErr = undefined;
//         state.serverErr = undefined;
//       },
//       [createProduct.rejected]: (state, action) => {
//         state.loading = false;
//         state.appErr = action?.payload?.message;
//         state.serverErr = action?.error?.message;
//       },
//     },
//   });
  
  export default productSlice.reducer;