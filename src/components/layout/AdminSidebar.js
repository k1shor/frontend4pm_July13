import React from 'react'

const AdminSidebar = ({product, category, user}) => {
  return (
    <>
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{"width": "280px","minHeight":"60vh"}}>
    <a href="/admin/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      {/* <svg className="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
      <i className='bi bi-speedometer2 me-3'></i>
      <span className="fs-4">Admin Dashboard</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="/" className="nav-link text-white" aria-current="page">
          <i class="bi bi-house me-3"></i>Home
        </a>
      </li>
      <li>
        {
            product ? 
            <a href="/admin/products" className="nav-link active text-white"><i className='bi bi-table me-3'></i>Products</a>
            :
            <a href="/admin/products" className="nav-link text-white"><i className='bi bi-table me-3'></i>
            Products</a>
            
        }
          
      </li>
      <li>
       { category?
        <a href="/admin/category" className="nav-link active text-white">
          <i className='bi bi-grid me-3'></i>
          Category
        </a>:
        <a href="/admin/category" className="nav-link text-white">
          <i className='bi bi-grid me-3'></i>
          Category
        </a>}
      </li>
      <li>
        {user?
        <a href="#" className="nav-link active text-white">
          <i className='bi bi-person-circle me-3'></i>
          Users
        </a>
        :
        <a href="#" className="nav-link text-white">
          <i className='bi bi-person-circle me-3'></i>
          Users
        </a>}
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>

    </>
  )
}

export default AdminSidebar