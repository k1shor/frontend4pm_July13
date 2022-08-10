import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { API } from '../config';
import Payment from './Payment';

const PaymentElement = () => {
    const [stripeApiKey, setStripeApiKey] = useState('')

    useEffect(() => {
        getStripeKey()
            .then(data => setStripeApiKey(data.stripeAPIKey))
            .catch(err => console.log(err))

    }, [])

    const getStripeKey = () => {
        return fetch(`${API}/stripeAPIKey`, {
            method: "GET"
        })
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    return (
        <>
            {
                stripeApiKey &&
                <Elements stripe={loadStripe(stripeApiKey)}>
                    <Payment />
                </Elements>
            }
        </>
    )
}

export default PaymentElement