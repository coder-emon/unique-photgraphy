import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/Auth.Context';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) return <h1 className='text-5xl px-auto py-32'>Loading...</h1>
    if (!user?.uid) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children

};

export default PrivateRoute;