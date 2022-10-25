import React from 'react'
import {useUserAuth} from './Auth'
const News = () => {
  let {signout}=useUserAuth();
  
  return (
    <div>Iam news</div>
  
  // app.auth.signOut()
    )
}

export default News