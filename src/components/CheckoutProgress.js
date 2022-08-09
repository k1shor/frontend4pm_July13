import React from 'react'
import {Link} from 'react-router-dom'
const CheckoutProgress = ({shipping, payment}) => {
  return (
    <>
        <div className='d-flex justify-content-evenly mt-5'>

            <Link to='/confirmorder' className='btn btn-warning'>Checkout</Link>

            {
                shipping ?
                <Link to ='/shipping' className= 'btn btn-warning'>Shipping</Link>
                :
                <button className='btn btn-warning' disabled>Shipping</button>
            }

            {
                payment ?
                <Link to = '/payment' className = 'btn btn-warning'>Payment</Link>
                :
                <button className='btn btn-warning' disabled>Payment</button>
            }


        </div>
    </>
  )
}

export default CheckoutProgress