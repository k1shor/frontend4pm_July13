import React, { useState, useEffect } from 'react'
import { getFilteredProducts, getProducts } from '../../api/productAPI'
import Card from '../Card'
import Checkbox_categories from '../Checkbox_categories'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import Product from '../Product'
import Radio_Prices from '../Radio_Prices'

const Deals = () => {
    const [sortBy, setSortBy] =useState('createdAt')
    const [order, setOrder] = useState("ASC")
    const [limit, setLimite] = useState(200000)
    const [skip, setSkip] = useState(0)
    const [products, setProducts] = useState([])
    const [myfilter, setmyFilter] = useState({
        filters: {category: [], product_price: []}
    })

    const handleFilters = (filters, filterBy) => {
        const newFilters = {...myfilter}
        newFilters.filters[filterBy] = filters
        setmyFilter(newFilters)

        // console.log(myfilter)
    }

    useEffect(()=>{
        getFilteredProducts(sortBy, order, limit, skip, myfilter)
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setProducts(data.filteredProducts)
                console.log("Data:",data)
            }
        })
    },[myfilter])



    return (
        <>
        <Navbar/>
            <div className='row'>
                <div className='col-3 mt-5 ps-5'>
                    {/* <h3 className='text-decoration-underline fw-bold text-info'>Deals</h3>
                    <ul className='list-unstyled fw-bold fs-5'>
                        <li>Deals of the Day</li>
                        <li>Most Popular</li>
                        <li>Flash Sale</li>
                    </ul> */}
                    <h3 className='text-decoration-underline fw-bold text-info'>Departments</h3>
                    <Checkbox_categories handleFilters = {handleFilters}/>

                    <h3 className='text-decoration-underline fw-bold text-info mt-4'>Prices</h3>
                    <Radio_Prices handleFilters={handleFilters}/>
                    


                </div>
                <div className='col-md-9 mt-5'>
                    <div className='row row-cols-md-4 g-4'>
                    {
                        products.map((product, i)=>{
                            return <Card key={i} item={product}/>
                        })
                    }
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Deals