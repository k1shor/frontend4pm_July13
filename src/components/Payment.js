import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { IMAGE } from '../config'
import CheckoutProgress from './CheckoutProgress'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'

const Payment = () => {
    const cart_items = useSelector(state=>state.cart.cart_items)
    const shipping_info = useSelector(state=>state.cart.shipping_info)
    console.log(shipping_info)

  return (
    <>
    
            <Navbar />
            <ToastContainer theme='colored' position='top-right' />
            <CheckoutProgress shipping payment/>
            {/* <div className='row p-5 m-5 shadow'>
                <div className='cartItems border-end border-3' style={{ width: "60%" }}>
                    <div className='row row-cols-md-4 g-4'>
                        {
                            cart_items.map((item, i) => {
                                return <div className="col mb-3">
                                    <div className="card">
                                        <img src={`${IMAGE}/${item.image}`} className="card-img-top" alt={item.image} style={{ height: "200px", width: "200px" }} />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{item.name}</h5>
                                            <h5 className="card-title">Quantity:{item.quantity}</h5>
                                            <h5 className="card-title">Total: Rs.{item.quantity * item.price}</h5>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <h2>Order Total: Rs. {JSON.parse(sessionStorage.getItem('order_total'))}</h2>

                </div>
                <div className='shippingInfo p-5' style={{ width: "40%" }}>
                    <h3 className='text-center text-decoration-underline'>Shipping Address</h3>

                    <label htmlFor='street'>Street Address:</label>

                    <label htmlFor='street2'>Alternate Street Address:</label>

                    <label htmlFor='city'>City:</label>

                    <label htmlFor='zip'>Zip Code:</label>

                    <label htmlFor='country'>Country:</label>
                       
                    <label htmlFor='phone'>Phone:</label>

                </div>
            </div> */}
            <Footer />
        </>
  )
}

export default Payment