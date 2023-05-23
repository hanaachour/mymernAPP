import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const register = createAsyncThunk(
    "/user/register",//Action's name
    async ({formValue,toast,navigate},{rejectWithValue,getState}) => {
      try{
        const { data } = await axios.post(
            "http://localhost:5000/users/register",
            formValue
          );
          toast.success("Logged Successfully");
      navigate("/");
      return data;
      }

      catch(error){
        return rejectWithValue(error.response.data);
      }
      
      }

  )



export const login = createAsyncThunk(
    "/user/login",//Action's name
    async ({formValue,toast,navigate},{rejectWithValue,getState}) => {
      try{
        const { data } = await axios.post(
            "http://localhost:5000/users/login",
            formValue
          );
          localStorage.setItem("userInfos",JSON.stringify(data));
          toast.success("Logged Successfully");
      navigate("/");
      return data;
      }

      catch(error){
        return rejectWithValue(error.response.data);
      }
      }
  )
  export const logout=createAsyncThunk(
    "user/logout",
    async(navigate,{rejectWithValue})=>{
    try{
      await localStorage.removeItem("userInfos");
      navigate("/user/login");
      window.location.reload();/////////////////////method that reloads the page
  
    }catch(error){
      return rejectWithValue(error?.response?.data)
    }
    }
    )
    /////////////
    export const getAllUsers = createAsyncThunk(
      "user/getAllUsers",
      async (payload, { rejectWithValue, getState, dispatch }) => {
        const userAuth = getState()?.userAuth;
        const { userLoggedIn } = userAuth;
        const config = {
          headers: { Authorization: `Bearer ${userLoggedIn?.token}` },
        };
    
        try {
          const { data } = await axios.get("http://localhost:5000/users", config);
          return data;
        } catch (error) {
          return rejectWithValue(error?.response?.message);
        }
      }
    );




  /////stringify<>parse
const userStored=localStorage.getItem("userInfos")
?JSON.parse(localStorage.getItem("userInfos"))
:null;
// console.log(userStored);
 



const userSlice = createSlice({
    name: "user",
    initialState: {userLoggedIn:userStored},
    extraReducers: {
        [register.pending]: (state, action) => {
          state.loading = true;
          state.appErr = undefined;
          state.serverErr = undefined;
        },
        [register.fulfilled]: (state, action) => {
          state.userRegisterd = action?.payload;
          state.appErr = undefined;
          state.serverErr = undefined;
        },
        [register.rejected]: (state, action) => {
          state.loading = false;
          state.appErr = action?.payload?.message;
          state.serverErr = action?.error?.message;
        },
        ///////////////////////////////////////////////////////////////////////////////////
        [login.pending]: (state, action) => {
          state.loading = true;
          state.appErr = undefined;
          state.serverErr = undefined;
        },
        [login.fulfilled]: (state, action) => {
          state.loading = false;
          state.userLogged = action?.payload; ////// qd je clique sur sign in ==>déclenchement action post(formvalue)avant logged successfully tjik payload m DB ela ktebna code mte7a f USERCONTROLLER
          state.appErr = undefined;
          state.serverErr = undefined;
        },
        [login.rejected]: (state, action) => {
          state.loading = false;
          state.appErr = action?.payload?.message;
          state.serverErr = action?.error?.message;
        },
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    [logout.pending]: (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    },
    [logout.fulfilled]: (state, action) => {
      state.loading = false;
      state.userLogged= null; ////// qd je clique sur logout ==>déclenchement action post(formvalue)avant logged successfully tjik payload m DB ela ktebna code mte7a f USERCONTROLLER
      window.location.reload();
      state.appErr = undefined;
      state.serverErr = undefined;
      
    },
    [logout.rejected]: (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    },
    ////////////////////////////////////////////////////////////////////
    [getAllUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.allUsers = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    },
}
});


export default userSlice.reducer;
