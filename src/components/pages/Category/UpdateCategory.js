import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getCategory, updateCategory } from '../../../api/categoryAPI'
import { isAuthenticated } from '../../../api/userAPI'
import AdminSidebar from '../../layout/AdminSidebar'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'

const UpdateCategory = () => {
    
    const {token} = isAuthenticated()

    const {id} = useParams()
    useEffect(()=>{
        getCategory(id)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setOldCategory(data.category_name)
            }
        })

    },[])

    const [old_category, setOldCategory] = useState('')
    const [new_category, setNewCategory] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = () => {
        updateCategory(id, new_category, token)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(true)
            }
        })
    }
    const showError =()=>{
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const redirect =() => {
        if(success){
            return navigate('/admin/category')
        }
    }
    

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
                            Update Category
                        </h4>
                        <Link to='/admin/category' className='btn btn-warning'>Go Back</Link>

                        </div>
                        {showError()}
                        {redirect()}
                        <div className='container my-5 w-50'>
                            <label htmlFor='old_category'>Old Category Name</label>
                            <input type={'text'} id='old_category' className='form-control' value = {old_category} disabled/>

                            <label htmlFor='old_category'>New Category Name</label>
                            <input type={'text'} id='new_category' className='form-control' onChange={e=>setNewCategory(e.target.value)}/>

                            <button className='btn btn-warning mt-2 form-control' onClick={handleSubmit}>Update Category</button> 
                           
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UpdateCategory