import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../../FIrebase/Firebase";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')

    const googleProvider = new GoogleAuthProvider();


// register user
const registerUser = (email,password) =>{
    setLoading(true)
  return  createUserWithEmailAndPassword(auth,email,password)
}

// login user
const loginUser = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}


// google login

const googleLogin = () =>{
    return signInWithPopup(auth,googleProvider)
}

    // on auth state change 
    useEffect(()=>{
        const unsubScribe =  onAuthStateChanged(auth,(user) =>{
            setLoading(false)
            setUser(user)
          } );

          return () =>{
              unsubScribe();
            }
      },[])



    const AuthInfo = {
        user,
        loading,
        registerUser,
        loginUser,
        setError,
        error,
        googleLogin,
        
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.object.isRequired 
};

export default AuthProvider;