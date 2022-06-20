import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Typography, ButtonGroup, Button} from '@mui/material'
// import Box from '@mui/material/Box'

const Cart = () => {
    const cart_items = [
        {product_name:"Samsung Galaxy A22", product_description:"attractive looks, affordable price", product_image:"./mobile_img/sam1.jpg", product_price:"Rs. 15000"},
        {product_name:"Samsung Note", product_description:"attractive looks, affordable price", product_image:"./mobile_img/sam2.jpg", product_price:"Rs. 85000"},
        {product_name:"real me", product_description:"attractive looks, affordable price", product_image:"./mobile_img/realme.png", product_price:"Rs. 35000"},
        {product_name:"Samsung Galaxy A22", product_description:"attractive looks, affordable price", product_image:"./mobile_img/sam1.jpg", product_price:"Rs. 25000"}
]

  return (
    <>
    <TableContainer sx={{marginTop:"25px", padding: "100px"}}>
        <Table border={5}>
            <TableHead>
                <TableRow>
                    <TableCell>S.No.</TableCell>
                    <TableCell>Product Image</TableCell>
                    <TableCell>Product Detail</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
{
    cart_items.map((item, i)=>{
        return <>
            <TableRow key={i}>
                <TableCell>{i+1}</TableCell>
                <TableCell>
                    <img src={item.product_image} height={'150px'}/>
                </TableCell>
                <TableCell>
                    <Typography variant='h4'>{item.product_name}</Typography>
                    <Typography variant='h5'>{item.product_price}</Typography>
                    <Typography variant='body1'>{item.product_description}</Typography>
                </TableCell>
                <TableCell>
                    <ButtonGroup>
                        <Button color='success' variant='contained'>Update</Button>
                        <Button color='error' variant = 'contained'>Remove</Button>
                    </ButtonGroup>
                </TableCell>
            </TableRow>
        </>
    })
}




            </TableBody>
        </Table>
    </TableContainer>

    </>
  )
}

export default Cart