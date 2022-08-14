import React from 'react'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'
import UserSidebar from '../../layout/UserSidebar'

const UserProfile = () => {
  return (
    <>
    <Navbar/>
    <div className='row'>
    <div className='col-md-3'>
        <UserSidebar/>
    </div>
    <div className='col-md-8'>
        Welcome to User Profile
    </div>

    </div>

    <Footer/>
    </>
  )
}

export default UserProfile