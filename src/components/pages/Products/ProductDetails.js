import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getRelatedProducts, productDetails } from '../../../api/productAPI'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import { IMAGE } from '../../../config'
import Card from '../../Card'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../../redux/actions/cartActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([])
    const [success, setSuccess] = useState(false)
    const dispatch = useDispatch()

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
        getRelatedProducts(id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setRelatedProducts(data)
                }
            })
    }, [id, success])
    const addToCart = () => {
        setSuccess(false)
        dispatch(addItemToCart(id, 1))
        .then(()=>{
            toast.success('ITEM ADDED TO CART')
            setSuccess(true)
        })
    }


    return (
        <>
        <ToastContainer theme='colored' position='top-right'/>
            <Navbar />
            <div className='w-75 mx-auto my-5 p-5 shadow-lg d-flex'>
                <div className='image-div w-50'>
                    <img src={`${IMAGE}/${product.product_image}`} className='w-100' />
                </div>
                <div className='w-50 p-5 product_description'>
                    <h3 className='mb-2'>{product.product_name}</h3>
                    <h4 className='mb-2'>Rs. {product.product_price}</h4>
                    <h4 className='mb-2'>Available: {product.count_in_stock}</h4>
                    <p className='mb-5'>Description: {product.product_description}</p>

                    <button className='btn btn-warning' onClick={addToCart}>Add to Cart</button>
                </div>

            </div>
            <div className='row row-cols-md-4 g-4'>
                {
                    relatedProducts.map((product, i) => {
                        return <Card key={i} item={product} />
                    })
                }
            </div>


            <Footer />
        </>
    )
}

export default ProductDetails