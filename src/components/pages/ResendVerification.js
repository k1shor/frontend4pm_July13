import React, { useState } from 'react'
import { resendVerification } from '../../api/userAPI'

const ResendVerifiation = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const resendVerificationSubmit = (e) => {
        setError('')
        setSuccess('')
        e.preventDefault()
        resendVerification(email)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setSuccess(data.message)
                }
            })
            .catch(err => console.log(err))
    }
    const showError = () => {
        if (error) {
            return <div className='alert alert-danger text-center'>{error}</div>
        }
    }

    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success text-center'>{success}</div>
        }

    }


    return (
        <>
            {showError()}
            {showSuccess()}
            {
                !success &&
                <form className='w-50 my-5 p-5 mx-auto shadow-lg'>
                    <label htmlFor='password'>New Password</label>
                    <input type={'text'} id='password' className='form-control' onChange={e => setEmail(e.target.value)} value={email}/>
                    <button className='btn btn-warning mt-2 form-control' onClick={resendVerificationSubmit}>Resend Verification Link</button>
                </form>
            }
        </>
    )
}

export default ResendVerifiation