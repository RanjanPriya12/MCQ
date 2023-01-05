import React, { useState } from "react";
import {
  Stack,
  Box,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Fade,
  AppBar,
  Container,
} from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "../redux/auth/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Navbar = () => {
  const navigate=useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const role=JSON.parse(localStorage.getItem('role'));
  const token=(localStorage.getItem('token'));
  console.log(role,token)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const dispatch = useDispatch();
  

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function logoutUser() {
    dispatch(userLogout());
    navigate('/');
    toast.success("Logout Successfully", {
      position: "bottom-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "blue" }}>
      <Container maxWidth="xl" sx={{ display: { xs: "none", md: "flex" } }}>
        <Link to="/" className="link">
          <Typography
            noWrap
            sx={{
              mt: 2,
              mr: 10,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            MCQ-App
          </Typography>
        </Link>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {
              role==="admin"?(
                <div style={{display:"flex", gap:"5rem"}}>
            <Link to="/create" className="link">
              <Typography
                textAlign="center"
                sx={{ color: "white", fontSize: "18px" }}
              >
                Create-MCQ
              </Typography>
            </Link>
            <Link to="/mcqList" className="link">
              <Typography
                textAlign="center"
                sx={{ color: "white", fontSize: "18px" }}
              >
                MCQ-List
              </Typography>
            </Link>
            </div>
            ):(  <Link to="/test" className="link">
            <Typography
              textAlign="center"
              sx={{ color: "white", fontSize: "18px" }}
            >
              MCQ-TEST
            </Typography>
          </Link>)
            }
            
          </Button>
        </Box>
       
        <Box
          display="flex"
          justifyContent="space-between"
          backgroundColor="blue"
          alignItems="center"
          p="10px 10px"
          sx={{ flexGrow: 0 }}
        >
          {token?(<Stack direction="row" spacing={0.4} alignItems="center">
              <div>
                
                <Button
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    fontSize: "1.1rem",
                  }}
                  size="large"
                >
                  <Avatar alt={role==='user'?'U':'A'} />
                </Button>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>
                    <Button
                      sx={{
                        color: "red",
                        textTransform: "capitalize",
                        fontSize: "16px",
                      }}
                      size="small"
                      onClick={logoutUser}
                    >
                      Logout
                    </Button>
                  </MenuItem>
                </Menu>
              </div>
            </Stack>):(<Stack direction="row" spacing={1}>
              <NavLink to="/login" className="link">
                <Button variant="contained" color="success">
                  Login
                </Button>
              </NavLink>
            </Stack>)}
            
         
            
         
        </Box>

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
      </Container>
    </AppBar>
  );
};
