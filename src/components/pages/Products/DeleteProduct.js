import React, { useEffect, useState } from 'react'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import { Link, useParams } from 'react-router-dom'
import AdminSidebar from '../../layout/AdminSidebar'
import { deleteProduct, productDetails } from '../../../api/productAPI'
import { IMAGE } from '../../../config'
import { isAuthenticated } from '../../../api/userAPI'

const DeleteProduct = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const { token } = isAuthenticated()
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        productDetails(id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setProduct(data)
                }
            })
    }, [])

    const clickDelete = e => {
        e.preventDefault()
        deleteProduct(id, token)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                    setSuccess('')
                }
                else {
                    setSuccess(data.message)
                    setError('')
                }
            })
    }
    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success'>{success}</div>
        }
    }
    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    return (
        <>
            <Navbar />
            <div className='container-fluid p-0'>
                <div className='row ms-0'>
                    <div className='col-md-3 ps-0'>
                        <AdminSidebar product />
                    </div>
                    <div className='col-md-9 p-5'>
                        <div className='d-flex justify-content-between w-75 mx-auto'>
                            <h4>
                                Delete Product
                            </h4>
                            <Link to="/admin/products" className='btn btn-warning'>Go Back</Link>
                        </div>
                        <hr className='my-2' />
                        {showError()}
                        {showSuccess()}
                        <div className='d-flex p-5 w-100'>
                            <img src={`${IMAGE}/${product.product_image}`} style={{ height: '200px' }} className='w-25' />
                            <div className='p-3 border-start border-3 w-75'>
                                <h4>{product.product_name}</h4>
                                <h4>Rs. {product.product_price}</h4>
                                <h4 className='text-truncate'>Description: {product.product_description}</h4>
                                <h4>In Stock: {product.count_in_stock}</h4>
                            </div>
                        </div>
                        {
                            !success &&
                            <>
                                <h4>Are you sure, you want to delete this product?</h4>
                                <button className='btn btn-danger' onClick={clickDelete}>Delete Product</button>
                            </>
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DeleteProduct