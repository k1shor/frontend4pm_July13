import React, { useState, useEffect, useRef } from 'react'
import { getCategories } from '../../../api/categoryAPI'
import { addProduct } from '../../../api/productAPI'
import { isAuthenticated } from '../../../api/userAPI'
import AdminSidebar from '../../layout/AdminSidebar'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'
// import { viewCategories } from '../../api/categoryApi'
// import { addProduct } from '../../api/productApi'
// import { isAuthenticated } from '../../api/userApi'
// import Footer from '../../Layout/Footer'
// import Nav from '../../Layout/Nav'
// import AdminSidebar from '../AdminSidebar'


const AddProduct = () => {
    const [categories,setCategories] = useState([])
    const {user, token} = isAuthenticated()
    const [error, setError]= useState('')
    const [success, setSuccess]= useState(false)
    const file_ref = useRef()
    const select_ref = useRef()

    const [product, setProduct] = useState({
        product_name:'',
        product_description:'',
        product_price:'',
        product_image:'',
        category:'',
        count_in_stock:'',
        formData:''
    })

    const {product_name, product_description, product_price, product_image, category, count_in_stock, formData} = product
    // destructing object to use its field names directly

    useEffect(()=>{
        getCategories()
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setCategories(data)
                setProduct({...product, formData:new FormData})
            }
        })
        .catch(err=>console.log(err))
    },[])

    const handleChange = name => event => {
        // const value = name == 'product_image' ? event.target.files[0] : event.target.value

        // console.log(name,value)
if(name == 'product_image'){
    formData.set(name, event.target.files[0])
    setProduct({...product, [name]:event.target.files[0]})
}
else{
    formData.set(name, event.target.value)
    setProduct({...product, [name]:event.target.value})

}

        // setProduct({...product, [name]:value})
        console.log(formData)
    }

    const clickSubmit = e => {
        e.preventDefault()
        // console.log(formData)
        addProduct(formData, token)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess(false)
            }
            else{
                setSuccess(true)
                setError('')
                file_ref.current.value = ""
                select_ref.current.value = ""
            }
        })
        .catch(err=>console.log(err))
    }

    const showError = () =>{
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if(success){
            return <div className='alert alert-success'>"Product added successfully."</div>
        }
    }

    return (
        <>
            <Navbar />
            <div className='row'>
                <div className='col-md-3'>
                    <AdminSidebar name={user.user_name} email={user.email} />
                </div>
                <div className='col-md-9 p-5'>
                    {showError()}
                    {showSuccess()}
                    <form className='shadow-lg p-5 w-75'>
                        <label htmlFor='product_name'>Product Name:</label>
                        <input type='text' id='product_name' className='form-control' 
                        onChange={handleChange('product_name')} value={product_name}/>

                        <label htmlFor='product_description'>Description:</label>
                        <textarea className='form-control' onChange={handleChange('product_description')} value={product_description}/>

                        <label htmlFor='price'>Price:</label>
                        <input type='number' id='price' className='form-control' onChange={handleChange('product_price')} value={product_price}/>

                        <label htmlFor ='image'>Image: </label>
                        <input type='file' id='image' className='form-control' onChange={handleChange('product_image')} ref={file_ref}/>

                        <label htmlFor ='count'>Count in Stock:</label>
                        <input type='number' id='count' className='form-control' onChange={handleChange('count_in_stock')} value={count_in_stock}/>

                        <label htmlFor='category'>Category</label>
                        <select className='form-control' onChange={handleChange('category')} ref= {select_ref}>
                            <option></option>
                            {
                                categories.map(category=>{
                                    return <option key={category._id} value={category._id} ref={select_ref}>{category.category_name}</option>
                                })
                            }
                        </select>

                        <button className='btn btn-warning form-control' onClick={clickSubmit}>Add Product</button>


                    </form>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddProduct