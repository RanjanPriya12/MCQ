import { Button, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

export const SingleMCQ = ({handleDelete, que, key}) => {
  return (
    <TableRow key={que._id}>
                    <TableCell>{key+1}</TableCell>
                    <TableCell>{que.title}</TableCell>
                    <TableCell><Button variant="outlined" onClick={()=>handleDelete(que._id)} startIcon={<DeleteIcon />}/></TableCell>
                </TableRow>
  )
}
