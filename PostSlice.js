import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createPost = createAsyncThunk(
  "post/create",
  async ({ formValue }, { rejectWithValue, getState }) => {
    try {
      const userAuth = getState()?.userAuth;
      const { userLoggedIn } = userAuth;
      const config = {
        headers: { Authorization: `Bearer ${userLoggedIn?.token}` },
      };
      const { data } = await axios.post(
        "http://localhost:5000/post",
        formValue,
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {},
  extraReducers: {
    [createPost.pending]: (state, action) => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.postCreated = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    },
    [createPost.rejected]: (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    },
  },
});

export default postSlice.reducer;