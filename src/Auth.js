import { createContext ,useContext} from "react";

let createAuth=createContext()
import {auth} from './Firebase'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,signInWithPopup
} from "firebase/auth";
import { useEffect ,useState} from "react";

 let Auth=({children})=>{
console.log(children)
let [user,setuser] =useState('');
  let signUp=(email,password)=>{

return createUserWithEmailAndPassword(auth,email,password);

  }
  let login=(email,password)=>{

return signInWithEmailAndPassword(auth,email,password);

  }
  let signout=()=>{

    return signOut(auth);

  }
  let signwithgoogle=()=>{

    let google=new GoogleAuthProvider();
    return signInWithPopup(auth,google);
  }

  useEffect(()=>{
const unsub=onAuthStateChanged(auth,(curuser)=>{

setuser(curuser)

})

return ()=>{
unsub()

}

  },[])
return (
<createAuth.Provider
value={{user,signUp,login,signout,signwithgoogle}}
>
{children}

</createAuth.Provider>

);
}
export default Auth;

export let useUserAuth =()=>{
return useContext(createAuth)

}
