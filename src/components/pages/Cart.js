import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography, ButtonGroup, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { IMAGE } from '../../config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addItemToCart, removeItemFromCart } from '../../redux/actions/cartActions';
import { Link } from 'react-router-dom';

// import Box from '@mui/material/Box'

const Cart = () => {
    const cart_items = useSelector(state => state.cart.cart_items)
    const dispatch = useDispatch()
    //     [
    //         // {product_name:"Samsung Galaxy A22", product_description:"attractive looks, affordable price", product_image:"./mobile_img/sam1.jpg", product_price:"Rs. 15000"},
    //         // {product_name:"Samsung Note", product_description:"attractive looks, affordable price", product_image:"./mobile_img/sam2.jpg", product_price:"Rs. 85000"},
    //         // {product_name:"real me", product_description:"attractive looks, affordable price", product_image:"./mobile_img/realme.png", product_price:"Rs. 35000"},
    //         // {product_name:"Samsung Galaxy A22", product_description:"attractive looks, affordable price", product_image:"./mobile_img/sam1.jpg", product_price:"Rs. 25000"}
    // ]
    const no_of_items_in_cart = cart_items.map(i=>i.quantity)

    const total_items = no_of_items_in_cart>0 ? no_of_items_in_cart.reduce((acc,cur)=>acc+cur):0

    const individual_total = cart_items.map(i=>i.quantity*i.price)
    const total_price = no_of_items_in_cart>0 ? individual_total.reduce((acc,cur)=>acc+cur) : 0

    const increaseItem = (item) => e => {
        e.preventDefault()
        let quantity = item.quantity
        quantity++
        if (quantity > item.stock) {
            toast.error(item.name + "Out of Stock")
        }
        else {
            dispatch(addItemToCart(item.product, quantity))
            toast.success(item.name + "Count increased in cart")
        }
    }

    const decreaseItem = (item) => e => {
        e.preventDefault()
        let quantity = item.quantity
        quantity--
        if (quantity == 0) {
            dispatch(removeItemFromCart(item.product))
            toast.warning(item.name + "Item removed from cart")
        }
        else {
            dispatch(addItemToCart(item.product, quantity))
            toast.warning(item.name + "Item count decreased in cart.")
        }
    }
    const removeItem = (item) => e => {
        e.preventDefault()
        dispatch(removeItemFromCart(item.product))
        toast.warning(item.name + "Item removed from cart.")
    }


    return (
        <>
            <ToastContainer theme='colored' position='top-right' />
            <Navbar />

            {
                cart_items && cart_items.length > 0 ?
                    <>
                        <div className='d-flex m-5 p-5'>

                            <TableContainer sx={{ marginTop: "25px", padding: "25px" }} style={{width:"75%"}}>
                                <h2 className='text-center'>Cart Items</h2>
                                <Table border={5}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className='text-center'>S.No.</TableCell>
                                            <TableCell className='text-center'>Product Image</TableCell>
                                            <TableCell className='text-center'>Product Name</TableCell>
                                            <TableCell className='text-center'>Unit Price</TableCell>
                                            <TableCell className='text-center'>Quantity</TableCell>
                                            <TableCell>Total Price</TableCell>
                                            <TableCell className='text-center'>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            cart_items.map((item, i) => {
                                                return <>
                                                    <TableRow key={i}>
                                                        <TableCell className='text-center'>{i + 1}</TableCell>
                                                        <TableCell className='text-center'>
                                                            <img src={`${IMAGE}/${item.image}`} height={'150px'} />
                                                        </TableCell>
                                                        <TableCell className='text-center'>
                                                            <Typography variant='h5'>{item.name}</Typography>
                                                        </TableCell>
                                                        <TableCell className='text-center'>
                                                            <Typography variant='h5'>Rs. {item.price}</Typography>
                                                        </TableCell>

                                                        <TableCell className='text-center'>
                                                            <ButtonGroup>
                                                                <Button color='success' variant='contained' onClick={decreaseItem(item)}>-</Button>
                                                                <input type={'text'} readOnly value={item.quantity} className='text-center w-25' />
                                                                <Button color='error' variant='contained' onClick={increaseItem(item)}>+</Button>
                                                            </ButtonGroup>
                                                        </TableCell>
                                                        <TableCell className='text-center'>
                                                            <Typography variant='h5'>Rs. {item.price * item.quantity}</Typography>

                                                        </TableCell>
                                                        <TableCell className='text-center'>
                                                            <Button color='error' variant='contained' onClick={removeItem(item)}><i className='bi bi-trash'></i></Button>
                                                        </TableCell>
                                                    </TableRow>
                                                </>
                                            })
                                        }




                                    </TableBody>
                                </Table>
                            </TableContainer>
                        <div className='p-5 m-3 my-5 shadow-lg text-center' style={{width:"25%"}}>
                                        <h2>Order Summary</h2>
                                        <hr className='my-2'/>
                                        <h4>Total Items: {total_items}</h4>
                                        <h4>Total Price: {total_price}</h4>
                                        <hr className='my-2'/>
                                        <Link to='/confirmorder' className='btn btn-warning'>Proceed to checkout</Link>

                        </div>
                        </div>
                    </>
                    :
                    <div className='alert alert-danger'>NO items in cart.</div>

            }




            <Footer />
        </>
    )
}

export default Cart