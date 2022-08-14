import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../api/userAPI'

const UserSidebar = () => {
    const {user} = isAuthenticated()
  return (
    <>
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{"width": "280px","minHeight":"60vh"}}>
    <a href="/admin/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      
      <i className='bi bi-speedometer2 me-3'></i>
      <span className="fs-4">User Profile</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to="/orders" className="nav-link text-white" aria-current="page">
          <i class="bi bi-house me-3"></i>Orders
        </Link>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>{user.username}</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        
        <li><Link className="dropdown-item" to="/user/profile">Profile</Link></li>
        <li><hr className="dropdown-divider"/></li>
        <li><Link className="dropdown-item" to="#">Sign out</Link></li>
      </ul>
    </div>
  </div>

    </>
  )
}

export default UserSidebar