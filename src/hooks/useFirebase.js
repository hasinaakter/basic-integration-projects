import { useEffect, useState } from "react"

import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth"
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
    const[user,setUser]=useState({});

   
    const signInWithGoogle = () => {
        signInWithPopup(auth,googleProvider)
        .then(resultt=>{
            const user = resultt.user;
            setUser(user);
            console.log(user);
        })
        .catch(err=>{
            console.error('Error',err);
        })
        // console.log('Sign In Soon');
    }

    const handleSignOut =()=>{
        signOut(auth)
        .then(()=>{})
    }
     
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setUser(user);
        })
     },[]);

return {
    user,
    setUser,
    signInWithGoogle,
    handleSignOut
};
}
export default useFirebase;