import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/auth/action';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const theme = createTheme();

export default function SignIn() {
  const dispatch=useDispatch();
  const initialState={
    email:"",
    password:""
  }
  const [user,setUser]=useState(initialState);
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

  const { email, password }= user;

    
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
    emailValidation();
    passValidation();
    if(email!=="" && password!==""){
      console.log("user",user);
      dispatch(loginUser(user));
      navigate('/');
      toast.success("User login Successfully", {
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email" value={user.email} onChange={handleChange} onKeyUp={emailValidation} onBlur={emailValidation}
              autoComplete="email"
              autoFocus
            />
            {emailErr && <p style={{color:"red"}}>{emailErr}</p>}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password" value={user.password} onChange={handleChange} onKeyUp={passValidation} onBlur={passValidation}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {passErr && <p style={{color:"red"}}>{passErr}</p>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
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
  );
}