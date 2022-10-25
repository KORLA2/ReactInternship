import { createContext } from "react";

let createAuth=createContext()
import auth from './Firebase'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,signInwithPopup
} from "firebase/auth";
import { useEffect ,useState} from "react";

 let Auth=({children})=>{
console.log(children)
let [user,setuser] =useState(null);
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
    return signInwithPopup(auth,google);

  }

  useEffect(()=>{
onAuthStateChanged(auth,(curuser)=>{

setuser(curuser)

})

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
