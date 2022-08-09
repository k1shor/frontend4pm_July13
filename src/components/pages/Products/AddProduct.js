import React, { useState, useEffect } from 'react'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import { Link } from 'react-router-dom'
import AdminSidebar from '../../layout/AdminSidebar'
import { getCategories } from '../../../api/categoryAPI'
import { addProduct } from '../../../api/productAPI'
import { isAuthenticated } from '../../../api/userAPI'

const AddProduct = () => {
    const [categories, setCategories] = useState([])
    const [product, setProduct] = useState({
        product_name: '',
        product_price: '',
        product_description: '',
        product_image: '',
        count_in_stock: '',
        category: '',
        error: '',
        success: false,
        formData: ''
    })
    // destructure product
    const { product_name, product_price, product_description, product_image, count_in_stock, category, error, success, formData } = product

    const {token} = isAuthenticated()

    useEffect(() => {
        getCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                    setProduct({...product, formData:new FormData})
                }
            })
            .catch(err=>console.log(err))
    }, [])

    const handleChange = name => e => {
        if (name == 'product_image') {
            setProduct({...product, [name]:e.target.files[0]})
            formData.set(name, e.target.files[0])
        }
        else{
            setProduct({...product, [name]:e.target.value})
            formData.set(name, e.target.value)
        }
    }

    const handleSubmit = e =>{
        e.preventDefault()
        addProduct(formData, token)
        .then(data=>{
            if(data.error){
                setProduct({...product, error:data.error})
            }
            else{
                setProduct({...product, success: true, product_name: '', product_price:'', product_description:'', count_in_stock: ''})
            }
        })
    }
    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess =() => {
        if(success){
            return <div className='alert alert-success'>Product added successfully.</div>
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
                                Add Product
                            </h4>
                            <Link to="/admin/products" className='btn btn-warning'>Go Back</Link>
                        </div>
                        {showError()}
                        {showSuccess()}
                        <hr className='my-2' />
                        <form className='p-5 my-5 shadow-lg'>
                            <label htmlFor='product_name'>Product Name:</label>
                            <input type={'text'} className='form-control mb-2' id='product_name' onChange={handleChange('product_name')} value= {product_name}/>
                            <label htmlFor='product_price'>Product Price:</label>
                            <input type={'text'} className='form-control mb-2' id='product_price' onChange={handleChange('product_price')} value= {product_price}/>
                            <label htmlFor='product_description'>Product Description:</label>
                            <input type={'text'} className='form-control mb-2' id='product_description' onChange={handleChange('product_description')} value= {product_description}/>
                            <label htmlFor='count_in_stock'>Count in Stock:</label>
                            <input type={'number'} className='form-control mb-2' id='count_in_stock' onChange={handleChange('count_in_stock')} value={count_in_stock} />
                            <label htmlFor='product_image'>Image: </label>
                            <input type={'file'} className='form-control mb-2' id='product_image' onChange={handleChange('product_image')} />
                            <label htmlFor='category'>Category</label>
                            <select id='category' className='form-control mb-2' onChange={handleChange('category')}>
                                <option></option>
                                {
                                    categories.map((category, i) => {
                                        return <option key={i} value={category._id}>{category.category_name}</option>
                                    })
                                }
                            </select>
                            <button className='btn btn-warning' onClick={handleSubmit}>Add Product</button>


                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddProduct