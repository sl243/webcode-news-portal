import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // google sign in
    const googleSignIn = (googleProvider) => {
        return signInWithPopup(auth, googleProvider);
    }

    // manual sign in
    const Register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Log in user
    const LogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out user
    const logOut = () => {
        return signOut(auth);
    }

    // manage user
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe()
        }
    },[])

    const AuthInfo = {user, googleSignIn, logOut, Register, LogIn}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;