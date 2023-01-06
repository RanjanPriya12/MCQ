import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/auth/action";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme();


export const SignUp = () => {
  const dispatch=useDispatch();
  const initialState={
    name:"",
    email:"",
    password:""
  }
  const [user,setUser]=useState(initialState);
  const [nameErr,setNameErr]=useState("");
  const [emailErr,setEmailErr]=useState("");
  const [passErr,setPassErr]=useState("");
  const navigate=useNavigate();

  const handleChange=(e)=>{
    const {value,name}=e.target;
    setUser({
      ...user,
      [name]:value
    });
  }

  const { name, email, password }= user;


  // name validation
  const nameValidation=()=>{
    const nameRegex="[a-zA-Z][a-zA-Z ]+[a-zA-Z]$";
    if(!name){
      setNameErr("User name is required!");
    }
    else if(name.length<3 || name.length>20){
      setNameErr("User name must be 3 to 20 characters long!");
    }
    else if(!name.match(nameRegex)){
      setNameErr("Please enter a valid name, name should contains only alphabate characters!");
    }
    else{
      setNameErr("");
    }
    return true;
  }

    
    //email validation
  const emailValidation=()=>{
    const emailRegex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if(!email){
      setEmailErr("Email is required!");
    }
    else if(!email.match(emailRegex)){
      setEmailErr("Please enter a valid email!");
    }
    else{
      setEmailErr("");
    }
    return true;
  }


    //password validation
  const passValidation=()=>{
    const passRegex="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
    if(!password){
      setPassErr("Please fill your password!");
    }
    else if(!password.match(passRegex)){
      setPassErr("Enter a strong password!");
    }
    else{
      setPassErr("");
    }
    return true;
  }
    

  
  const handleSubmit=(e)=>{
    e.preventDefault();
    nameValidation();
    emailValidation();
    passValidation();
    if(name!=="" && email!=="" && password!==""){
      console.log("user",user);
      dispatch(registerUser(user));
      navigate('/');
      toast.success("Account created Successfully", {
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }


  return (
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  value={user.name} onChange={handleChange} onKeyUp={nameValidation} onBlur={nameValidation}
                  required
                  fullWidth
                  id="firstName"
                  label="User Name"
                  autoFocus
                />
                {nameErr && <p style={{color:"red"}}>{nameErr}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email" value={user.email} onChange={handleChange} onKeyUp={emailValidation} onBlur={emailValidation}
                  autoComplete="email"
                />
                {emailErr && <p style={{color:"red"}}>{emailErr}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password" value={user.password} onChange={handleChange} onKeyUp={passValidation} onBlur={passValidation}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                {passErr && <p style={{color:"red"}}>{passErr}</p>}
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <ToastContainer
          position="bottom-left"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </ThemeProvider>
  )
}






