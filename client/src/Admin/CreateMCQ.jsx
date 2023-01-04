import React,{ useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { createQuestion } from '../redux/admin/action';


export const CreateMCQ = () => {
    const dispatch=useDispatch();

    const initialState={
        title:"",
        option1:"",
        option2:"",
        option3:"",
        option4:"",
        Answer1:"",
        Answer2:"",
        Answer3:"",
        Answer4:""
    };

    const [mcq, setMcq]=useState(initialState);
    const handleChange=(e)=>{
        const { value, name} = e.target;
        setMcq({
            ...mcq,
            [name]:value
        })
    }
    
    let correctOption=[mcq.Answer1,mcq.Answer2,mcq.Answer3,mcq.Answer4];
    let options=[mcq.option1,mcq.option2,mcq.option3,mcq.option4];
    //const token=JSON.parse(localStorage.getItem('token'));
    const questionData={
        title:mcq.title,
        correctOption,
        options,
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("hello",questionData)
        dispatch(createQuestion(questionData));
    }
  return (
    <div style={{width:"50%", margin:"auto", padding:"20px"}}>
<Typography component="h1" variant="h5">
            Write title of this question here...
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="title"
                  required
                  value={mcq.title}
                  onChange={handleChange}
                  fullWidth
                  id="title"
                  label="Write question"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
              <Typography component="h1" variant="h5">
            Write your options for this question...
          </Typography>
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="option1"
                  label="Option1"
                  value={mcq.option1}
                  onChange={handleChange}
                  name="option1"
                  autoComplete="option1"
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="option2"
                  label="Option2"
                  value={mcq.option2}
                  onChange={handleChange}
                  name="option2"
                  autoComplete="option2"
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="option3"
                  label="Option3"
                  name="option3"
                  value={mcq.option3}
                  onChange={handleChange}
                  autoComplete="option3"
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="option4"
                  label="Option4"
                  name="option4"
                  value={mcq.option4}
                  onChange={handleChange}
                  autoComplete="option4"
                  type="text"
                />
              </Grid>

              <Grid item xs={12} sm={12}>
              <Typography component="h1" variant="h5">
            Write correct options for this question...
          </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Answer1"
                  label="Answer1"
                  value={mcq.Answer1}
                  onChange={handleChange}
                  type="text"
                  id="Answer1"
                  autoComplete="Answer1"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Answer2"
                  label="Answer2"
                  value={mcq.Answer2}
                  onChange={handleChange}
                  type="text"
                  id="Answer2"
                  autoComplete="Answer2"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Answer3"
                  label="Answer3"
                  value={mcq.Answer3}
                  onChange={handleChange}
                  type="text"
                  id="Answer3"
                  autoComplete="Answer3"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Answer4"
                  label="Answer4"
                  value={mcq.Answer4}
                  onChange={handleChange}
                  type="text"
                  id="Answer4"
                  autoComplete="Answer4"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create MCQ
            </Button>
            
          </Box>
    </div>
  )
}
