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

const theme = createTheme();


export const SignUp = () => {
  const initialState={
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  }
  const [user,setUser]=useState(initialState);
  const [nameErr,setNameErr]=useState("");
  const [emailErr,setEmailErr]=useState("");
  const [passErr,setPassErr]=useState("");
  const [conPassErr,setConPassErr]=useState("");

  const handleChange=(e)=>{
    const {value,name}=e.target;
    setUser({
      ...user,
      [name]:value
    });
  }

  const { name, email, password, confirmPassword}= user;


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
    const passRegex="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$";
    if(!password){
      setPassErr("Please fill your password!");
    }
    else if(!password.match(passRegex)){
      setPassErr("Password must contain one special character, one lowercse character, one upercase character, and it should be of 6-10 characters long!");
    }
    else{
      setPassErr("");
    }
    return true;
  }
    


    //confirm password validation
  const confPassValidation=()=>{
    const confPassRegex=password;
    if(!confirmPassword){
      setConPassErr("Please confirm your password!");
    }
    else if(!confirmPassword.match(confPassRegex)){
      setConPassErr("Password did not match!");
    }
    else{
      setConPassErr("");
    }
    
    return true;
  }

  
  const handleSubmit=(e)=>{
    e.preventDefault();
    nameValidation();
    emailValidation();
    passValidation();
    confPassValidation();
    if(name!=="" && email!=="" && password!=="" && confirmPassword!==""){
      console.log("user",user);
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
                  name="username"
                  required
                  fullWidth
                  id="firstName"
                  label="User Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="ConPassword"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
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
    </ThemeProvider>
  )
}






