import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";
import{ register} from "../Redux/Slices/UserSlice"
import 'react-toastify/dist/ReactToastify.css';

function Register(props)  {
const dispatch=useDispatch();
const navigate=useNavigate();




const [formValue,setFormValue]=useState({
  name:"",
  email:"",
  password:""
})
const handleChange=(e)=>{
  setFormValue({...formValue,[e.target.name]:e.target.value});
}
const handleSubmit=(e)=>{
  e.preventDefault();
  dispatch(register({formValue,toast,navigate}))
}


  return (
    <div>
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
              Sign Up
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
              id="name"
              label="full name"
              name="name"
              autoComplete="name"
              autoFocus
            />
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
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/user/login" variant="body2">
                    {"Already an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>




    </div>
  )
}
export default Register;