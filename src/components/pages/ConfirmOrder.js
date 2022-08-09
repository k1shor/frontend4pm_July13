import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { IMAGE } from '../../config';
import CheckoutProgress from '../CheckoutProgress';
import { Link } from 'react-router-dom';

const ConfirmOrder = () => {
    const cart_items = useSelector(state => state.cart.cart_items)
    
    const no_of_items_in_cart = cart_items.map(i=>i.quantity)
    const total_items = no_of_items_in_cart.reduce((acc,cur)=>acc+cur)

    const individual_total = cart_items.map(i=>i.quantity*i.price)
    const total_price = individual_total.reduce((acc,cur)=>acc+cur)
    sessionStorage.setItem('order_total',total_price)

    return (
        <>
            <Navbar />
            <CheckoutProgress/>
            {
                cart_items.length > 0 ?
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
                                                        <Typography variant='h5'>{item.quantity}</Typography>
                                                        </TableCell>
                                                        <TableCell className='text-center'>
                                                            <Typography variant='h5'>Rs. {item.price * item.quantity}</Typography>

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
                                        <h4>Total Price: Rs. {total_price}</h4>
                                        <hr className='my-2'/>
                                        <Link to ='/shipping' className='btn btn-warning'>Proceed to Shipping</Link>

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

export default ConfirmOrder