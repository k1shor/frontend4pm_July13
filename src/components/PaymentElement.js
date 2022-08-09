import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { API } from '../config';
import Payment from './Payment';

const PaymentElement = () => {
const [stripeApiKey, setStripeApiKey] = useState('')

useEffect(()=>{
    return fetch(`${API}/stripeAPIKey`,{
        method:"GET"
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        return setStripeApiKey(data.stripeAPIKey)})
    .catch(err=>console.log(err))

},[])

  return (
    <>
    {
        stripeApiKey && 
        <Elements stripe={loadStripe(stripeApiKey)}>
            <Payment/>
        </Elements>
    }
    </>
  )
}

export default PaymentElement