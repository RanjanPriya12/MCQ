
import { Navigate } from "react-router-dom";


const RequiredAuth=({children})=>{
  const token=localStorage.getItem('token');
 
  if(!token){
    return <Navigate to="/login" replace={false}/>
  }
  return children;
}

export default RequiredAuth;