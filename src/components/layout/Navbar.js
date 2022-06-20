import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='row bg-dark'>
                <div className='col-md-3 text-center'>
                    <Link className="navbar-brand text-white fs-3 fw-bold" to="/">My Store</Link>
                </div>
                <div className='col-md-6 p-2'>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-warning" type="submit">Search</button>
                    </form>
                </div>
                <div className='col-md-3 d-flex justify-content-evenly'>
                    <Link to="/register"><i className="bi bi-person-plus fs-3 text-white"></i></Link>
                    <Link to="/signin"><i className="bi bi-box-arrow-in-right fs-3 text-white"></i></Link>
                    <Link to="/cart"><i className="bi bi-cart fs-3 text-white"></i></Link>
                </div>
            </div>


            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/deals">Deals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/contact">Contact</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar