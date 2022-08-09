import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getCategories } from '../../../api/categoryAPI'
import AdminSidebar from '../../layout/AdminSidebar'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'

const ViewCategories = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setCategories(data)
            }
        })
    },[])

    return (
        <>
            <Navbar />
            <div className='container-fluid p-0'>
                <div className='row ms-0'>
                    <div className='col-md-3 ps-0'>
                        <AdminSidebar category />
                    </div>
                    <div className='col-md-9 p-5'>
                        <div className='d-flex justify-content-between w-75 mx-auto'>
                        <h4>
                            Categories
                        </h4>
                        <Link to='/admin/addcategory' className='btn btn-warning'>Add Category</Link>

                        </div>
                        <div className='container my-5'>
                            <table className='table text-center table-bordered shadow-lg table-hover'>
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th>Category Name</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categories.map((category, i)=>{
                                            return <tr key={i}>
                                                <td>{i+1}</td>
                                                <td>{category.category_name}</td>
                                                <td>
                                                    <div className='btn-group'>
                                                    
                                                    <Link to= {`/admin/updatecategory/${category._id}`} className='btn btn-warning'><i class="bi bi-pencil-square"></i></Link>
                                                    
                                                    <Link to={`/admin/deletecategory/${category._id}`} className='btn btn-danger'><i class="bi bi-trash3"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ViewCategories