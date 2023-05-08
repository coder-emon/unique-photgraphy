import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Config/firebase.config";
const { createContext, useEffect, useState } = require("react")
export const AuthContext = createContext()

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth)
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        signUp,
        updateUser,
        login,
        logout,
        googleSignIn,
        user,
        setUser,
        loading,
        setLoading,
    }
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
}
export default AuthProvider