import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export const Score = () => {
  return (
    <div style={{width:"100%", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div>
        <Typography><i>Thanks for participating in our MCQ Test</i></Typography>
        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
            >
              Know Your Score
            </Button>
        </div>
        
    </div>
  )
}
