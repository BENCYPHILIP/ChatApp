import React, { Children } from 'react'
import { Navigate } from 'react-router-dom';


function PrivateRoute({Children}:any) {
    const useAuth=()=>
    {
        return false
    }
    const auth=useAuth()
    return (
      auth ? Children : <Navigate to="/"/>
    );
  }
export default PrivateRoute


  