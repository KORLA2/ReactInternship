import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from './Auth'
const Protected = ({children}) => {
 
 let  {user}=useUserAuth();
 
 if(!user)

 return <Navigate to='/'/> 

  return children
}

export default Protected
