import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '../api/userAPI'

const AdminRoute = () => {
  return (
    <>
    {
        isAuthenticated() && isAuthenticated().user.role === 1 ? 
        <Outlet/>
        : <Navigate to='/signin'/>
    }
    </>
  )
}

export default AdminRoute