import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate} from "react-router-dom";
import { login } from "../Redux/Slices/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import{toast}from 'react-toastify'

function Login(props) {
  const [formValue,setFormValue]=useState({
    em:"",
    password:""
  });
  const handleChange=(e)=>{
    setFormValue({...formValue,[e.target.name]:e.target.value});
  };
  const dispatch=useDispatch();
  const navigate=useNavigate();

 const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(login({formValue,toast,navigate}))
 };

 const{userLoggedIn,appErr}= useSelector((state)=>state.userAuth);
 useEffect(()=>{
  toast.error(appErr);
},[appErr])////////// dependancie [appErr] : toast ne s'affiche que qd il y a erreur


  return (
    <div>
      {!userLoggedIn&&
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box onSubmit={handleSubmit}
              component="form"
              noValidate
              sx={{ mt: 1 }}
              
            >
              <TextField onChange={handleChange}
              
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField onChange={handleChange}
                
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/user/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
}
    </div>
  );
}

export default Login;