import React, { useEffect, useState } from 'react'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import { Link } from 'react-router-dom'
import AdminSidebar from '../../layout/AdminSidebar'
import { getProducts } from '../../../api/productAPI'
import { IMAGE } from '../../../config'

const ProductsAdmin = () => {
    const [sortBy, setSortBy] = useState('createdAt')
    const [order, setOrder] = useState('DESC')
    const [limit, setLimit] = useState(8)
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts(sortBy, order, limit)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setProducts(data)
                }
            })
    }, [limit])

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
                                Products.
                            </h4>
                            <Link to="/admin/addproduct" className='btn btn-warning'>Add Product</Link>
                        </div>
                        <hr className='my-2' />
                        <table className='table table-hover table-bordered text-center'>
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Product Image</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Unit Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product, i) => {
                                        return <tr>
                                            <td>{i + 1}</td>
                                            <td>
                                                <img src={`${IMAGE}/${product.product_image}`} alt={product.product_name} style={{ height: "100px" }} />
                                            </td>
                                            <td>{product.product_name}</td>
                                            <td>{product.count_in_stock}</td>
                                            <td>Rs.{product.product_price}</td>
                                            <td>
                                                <div className='btn-group'>
                                                    <Link to={`/admin/updateproduct/${product._id}`} className='btn btn-warning'><i class="bi bi-pencil-square"></i></Link>

                                                    <Link to={`/admin/deleteproduct/${product._id}`} className='btn btn-danger'><i class="bi bi-trash3"></i></Link>
                                                </div>
                                            </td>

                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                        <button className='btn btn-warning' onClick={()=>{setLimit(limit+3)}}>Show More</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductsAdmin