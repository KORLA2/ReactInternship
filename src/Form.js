import { Card, Typography,IconButton ,Button,Box,TextField} from '@material-ui/core'
import React,{useState} from 'react'
import styled from 'styled-components'
import { GitHub } from '@material-ui/icons'
import { Google } from '@mui/icons-material'
import  app from './Firebase'
import { useUserAuth } from './Auth'
import {Navigate, useNavigate} from 'react-router-dom'
import { useContext } from 'react'
const Form = () => {

    let [signup,setsignup]=useState(0);
let {signUp,login,signwithgoogle}=useUserAuth();
let navigate=useNavigate()
let [email, setemail] = useState("");
let [error,seterror]=useState('');
let [password, setpassword] = useState("");

  return (
    <Center>
      <Box
        style={{

          overflow: "hidden",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          padding: "20px",

          width: "350px",

        }}
      >
        <Card
          style={{
            transition: ".5s",
            padding: "30px",
            position: "absolute",
            left: signup === 0 ? "0px" : "-500px",
            zIndex: 1,
            height: "350px",
            width: "350px",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Typography variant="h6">Welcome to Rapid News</Typography>

          <Typography variant="body2">Dont have account</Typography>

          <Button
            variant="contained"
            color="primary"
            style={{ positon: "absolute", margin: "10px" }}
            onClick={() => {
              
              setsignup(1);

            }}
          >
            Create Account
          </Button>
          <Typography variant="body2">Have an account</Typography>

          <Button
            variant="contained"
            color="secondary"
            style={{ positon: "absolute", margin: "10px" }}
          >
            SignIn With
          </Button>

          <TextField label="Email" id="fullWidth" onChange={(e)=>{

setemail(e.target.value)

          }}  />
          
          <TextField  type="password" label="Password" onChange={(e)=>{
setpassword(e.target.value)

          }}   id="fullWidth" sx={{ margin: "10px" }} />
          <Button
            variant="contained"
            color="secondary"
            style={{ positon: "absolute", margin: "10px" }}

onClick={async ()=>{
try{

  await login(email,password)
  navigate('/News')
}  
catch(error){
seterror(error.message)

}

}}
  >
            SignIn
          </Button>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <IconButton onClick={async ()=>{
              try{

await signwithgoogle();
navigate('/News')

              }
catch(error){
  seterror(error.message)
}
            }}>
              <Google  />
            </IconButton>
            <IconButton>
              <GitHub />
            </IconButton>
          </div>
        </Card>
        <Card
          style={{
            transition: ".5s",
            padding: "20px",

            position: "relative",
            right: signup === 1 ? "0px" : "-400px",
            zIndex: 1,
            width: "350px",
            height: "350px",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            style={{ positon: "absolute", width: "100%" }}

          >
            SignUp With
          </Button>

       <TextField id="outlined-search"  label="Email" type="search" onChange={(e)=>{setemail(e.target.value)}}/>
        
          <TextField label="Password" id="fullWidth" sx={{ margin: "10px" }}  onChange={(e)=>{setpassword(e.target.value)}} />
          <Button
            variant="contained"
            color="secondary"
            style={{ positon: "absolute", margin: "10px" }}

 onClick={async ()=>{
  seterror('')
try{
await signUp(email,password);
navigate('/News')
}
catch(error){
seterror(error.message)
}

 }}
          >
            SignUp
          </Button>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <IconButton>
              <Google />
            </IconButton>
            <IconButton>
              <GitHub />
            </IconButton>
          </div>
        </Card>
      </Box>
    </Center>
  );
}

export default Form
let Center=styled.div`
height:100vh;
width:100vw;
background:rgba(0,0,0,0.4);
display:flex;
align-items: center;
justify-content: center;
`