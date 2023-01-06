import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuestions } from "../redux/admin/action";
import { useNavigate } from "react-router-dom";

export const Test = () => {
  const navigate=useNavigate();
  const initialState={
    title:"",
    Answer:[],
  }
  const [test,setTest]=useState([initialState]);
  const questions = useSelector((state) => state.adminReducer.questions);
  console.log(questions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllQuestions(questions));
  }, [dispatch]);

  const handleChange=(e)=>{
    console.log(e.target.checked)
    const { value, name}=e.target;
    setTest({
      ...test,
      [name]:value
    })
    console.log(test)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    navigate('/score');
  };

  return (
    <div style={{width:"80%", margin:"auto", marginTop:"50px"}}>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {questions?.map((que, ind) => (
            <Grid item xs={12} sm={12} key={que._id} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" m="1rem">
              <Typography component="h1">
                <span>{ind + 1}) </span>
                {que.title} <span style={{color:"blue", marginLeft:"10rem"}}>Marks:{que.marks}</span>
              </Typography>
               <Grid container spacing={2}>
                {(que.options)?.map((option,ind)=>(
                  
                  <Grid item xs={12} sm={12} key={ind}>
                    
                  <Typography>
                  <span>{ind+1}) </span><Checkbox name="languages"
                    value={test.Answer}
                    id="flexCheckDefault"
                    onChange={handleChange}/>
                    {option}
                  </Typography></Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};
