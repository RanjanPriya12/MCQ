
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { Navbar } from './components/navbar';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { CreateMCQ } from './Admin/CreateMCQ';
import { Test } from './User/Test';
import { MCQList } from './Admin/MCQList';
import RequiredAuth from './HOC/isAuthorize';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Welcome to our MCQ website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const App = () => {
  return (
    <>
    <Navbar/>
     
      
       
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<SignIn/>}/>
          <Route path="/register" element={<SignUp/>}/>
          <Route path='/create' element={
          <RequiredAuth>
          <CreateMCQ/>
        </RequiredAuth>
        }/>
        <Route path='/test' element={
          <RequiredAuth>
          <Test/>
        </RequiredAuth>
        }/>
        <Route path='/mcqList' element={
          <RequiredAuth>
          <MCQList/>
        </RequiredAuth>
        }/>
          {/* <Route path='/create' element={<CreateMCQ/>}/>
          <Route path="/test" element={<Test/>}/> */}
          {/* <Route path='/mcqList' element={<MCQList/>}/> */}
          </Routes>
       
    
      <Copyright sx={{ mt: 1 }} />
      </>
      
  );
};

export default App;
