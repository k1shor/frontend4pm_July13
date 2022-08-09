import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE } from '../config'

const Card = ({item}) => {
    return (
        <>
        
            <div className="col mb-3">
                <div className="card">
                    <img src={`${IMAGE}/${item.product_image}`} className="card-img-top" alt={item.product_image} style={{height:"200px", width:"200px"}}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.product_name}</h5>
                        <p className="card-text text-truncate">{item.product_description}</p>
                        <Link to={`/product/${item._id}`} className='btn btn-warning'>View Details</Link>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Card