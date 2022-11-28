import React from 'react'
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import Profile from '../Profile/index';

const ProtectedRoutes = () => {
    const { user } = useAuth();

    return user?.role === "admin" ? <Outlet /> : <Profile />
    
}

export default ProtectedRoutes;