import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IMAGE } from '../../config'
import { saveShippingInfo } from '../../redux/actions/cartActions'
import Card from '../Card'
import CheckoutProgress from '../CheckoutProgress'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
import { countries } from 'countries-list'


const Shipping = () => {
    const cart_items = useSelector(state => state.cart.cart_items)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [shipping_info, setShippingInfo] = useState({
        shipping_address: '',
        alternate_shipping_address: '',
        city: '',
        country: '',
        zip: '',
        phone: ''
    })

    const countriesList = Object.values(countries)
    console.log(countriesList)
    const handleShippingInfo = name => e => {
        setShippingInfo({ ...shipping_info, [name]: e.target.value })
    }

    const UpdateShippingInfo = (e) => {
        dispatch(saveShippingInfo(shipping_info))
        toast.success('Shipping Info Updated')
        setTimeout(() => {
            navigate('/payment')
        }, [3000])
    }

    return (
        <>
            <Navbar />
            <ToastContainer theme='colored' position='top-right' />
            <CheckoutProgress shipping />
            <div className='row p-5 m-5 shadow'>
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
                    <input type={'text'} className='form-control' id='street' onChange={handleShippingInfo('shipping_address')} />

                    <label htmlFor='street2'>Alternate Street Address:</label>
                    <input type={'text'} className='form-control' id='street2' onChange={handleShippingInfo('alternate_shipping_address')} />

                    <label htmlFor='city'>City:</label>
                    <input type={'text'} className='form-control' id='city' onChange={handleShippingInfo('city')} />

                    <label htmlFor='zip'>Zip Code:</label>
                    <input type={'text'} className='form-control' id='zip' onChange={handleShippingInfo('zip')} />

                    <label htmlFor='country'>Country:</label>
                    <select className='form-control' id='country' onChange={handleShippingInfo('country')}>
                        <option></option>
                        {countriesList.map(country => {
                            return <option value={country.name}>{country.name}</option>
                        })}
                    </select>

                    <label htmlFor='phone'>Phone:</label>
                    <input type={'text'} className='form-control' id='phone' onChange={handleShippingInfo('phone')} />

                    <Link to='/payment' className='btn btn-warning form-control mt-3' onClick={UpdateShippingInfo}>Save Shipping Info & Proceed to Payment</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Shipping