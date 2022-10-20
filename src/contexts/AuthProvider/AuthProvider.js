import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google sign in
    const googleSignIn = (googleProvider) => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // manual sign in
    const Register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Log in user
    const LogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out user
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // user profile update
    const userProfileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // user email verification
    const userEmailVerity = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // manage user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const AuthInfo = { 
        user, 
        loading, 
        googleSignIn, 
        logOut, 
        Register, 
        LogIn,
        userProfileUpdate,
        userEmailVerity, 
    }


    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;