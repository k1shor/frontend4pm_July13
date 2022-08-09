import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import AdminSidebar from '../layout/AdminSidebar'

const AdminDashboard = () => {
    return (
        <>
            <Navbar />
            <div className='container-fluid p-0'>
            <div className='row ms-0'>
                <div className='col-md-3 ps-0'>
                    <AdminSidebar />
                </div>
                <div className='col-md-9 p-5'>
                    Welcome to Admin Dashboard.
                </div>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminDashboard