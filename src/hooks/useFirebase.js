import { useEffect, useState } from "react"

import {getAuth, GoogleAuthProvider} from "firebase/auth"
import app from "../firebase.init";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const useFirebase = () => {
    const[user,setUser]=useState({});

    // useEffect(()=>{
    // },[]);
    const signInWithGoogle = () => {
        console.log('Sign In Soon');
    }

return {
    user,
    setUser,
    signInWithGoogle
};
}
export default useFirebase;