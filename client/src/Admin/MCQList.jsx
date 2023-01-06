import React,{ useEffect } from 'react';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { deleteQuestion, getAllQuestions } from '../redux/admin/action';
import { SingleMCQ } from './SingleMCQ';

export const MCQList = () => {
    const questions = useSelector(state=>state.adminReducer.questions);
    const dispatch=useDispatch();
    console.log(questions);

    const handleDelete=(id)=>{
      dispatch(deleteQuestion(id))
    }

    useEffect(()=>{
        dispatch(getAllQuestions(questions));
    },[dispatch,questions.length])
  return (
    <div style={{width:"70%", margin:"auto", marginTop:"50px"}}>
         <TableContainer component={Paper} style={{width:"80%", margin:"auto"}}>
      <Table>
        <TableHead>
          <TableRow component="h1">
            <TableCell>
              S.N.
            </TableCell>
            <TableCell>
              Question Title
            </TableCell> 
            <TableCell>
              Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {questions?.map((que,ind)=>(
                <SingleMCQ handleDelete={handleDelete} key={ind} que={que}/>
            ))}
        </TableBody>   
      </Table>
    </TableContainer>
    </div>
  )
}
