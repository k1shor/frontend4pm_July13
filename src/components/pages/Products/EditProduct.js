import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import { Link, useParams } from 'react-router-dom'
import AdminSidebar from '../../layout/AdminSidebar'
import { editProduct, productDetails } from '../../../api/productAPI'
import { IMAGE } from '../../../config'
import { isAuthenticated } from '../../../api/userAPI'
import { getCategories } from '../../../api/categoryAPI'

const EditProduct = () => {
    const [product, setProduct] = useState({
        product_name: '',
        product_price: '',
        product_description: '',
        count_in_stock: '',
        category: '',
        error: '',
    })
    const [success, setSuccess] = useState(false)
    const { id } = useParams()
    const { token } = isAuthenticated()
    const select_ref = useRef()

    const [categories, setCategories] = useState([])
    // destructure product
    const { product_name, product_price, product_description, count_in_stock, error} = product


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
        getCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                }
            })
            .catch(err => console.log(err))
    }, [success])

    const handleChange = name => e => {
            setProduct({ ...product, [name]: e.target.value })
    }

    const clickUpdate = e => {
        e.preventDefault()
        editProduct(id, product, token)
            .then(data => {
                console.log(data)
                if (data.error) {
                    setProduct({ ...product, error: data.error })
                }
                else {
                    setProduct({ ...product, product_name: '', product_price: '', product_description: '', count_in_stock: '' })
                    setSuccess(true)
                }
            })
    }
    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success'>Product updated successfully.</div>
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
                                Edit Products
                            </h4>
                            <Link to="/admin/products" className='btn btn-warning'>Go Back</Link>
                        </div>
                        <hr className='my-2' />
                        {showError()}
                        {showSuccess()}
                        <div className='d-flex p-5'>
                            <img src={`${IMAGE}/${product.product_image}`} style={{ height: '200px' }} />
                            <div className='p-3 border-start border-3'>
                                <h4>{product.product_name}</h4>
                                <h4>Rs. {product.product_price}</h4>
                                <h4>Description: {product.product_description}</h4>
                                <h4>In Stock: {product.count_in_stock}</h4>
                            </div>
                        </div>

                        {
                            !success &&
                            <>
                                <form className='shadow-lg p-5 w-75'>

                                    <label htmlFor='product_name'>Product Name:</label>
                                    <input type='text' id='product_name' className='form-control'
                                        onChange={handleChange('product_name')} value={product_name} />

                                    <label htmlFor='product_description'>Description:</label>
                                    <textarea className='form-control' onChange={handleChange('product_description')} value={product_description} />

                                    <label htmlFor='price'>Price:</label>
                                    <input type='number' id='price' className='form-control' onChange={handleChange('product_price')} value={product_price} />

                                    <label htmlFor='count'>Count in Stock:</label>
                                    <input type='number' id='count' className='form-control' onChange={handleChange('count_in_stock')} value={count_in_stock} />

                                    <label htmlFor='category'>Category</label>
                                    <select className='form-control' onChange={handleChange('category')}>
                                        <option></option>
                                        {
                                            categories.map(category => {
                                                return <option key={category._id} value={category._id} ref={select_ref}>{category.category_name}</option>
                                            })
                                        }
                                    </select>

                                    <button className='btn btn-warning form-control' onClick={clickUpdate}>Edit Product</button>


                                </form>
                            </>
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default EditProduct