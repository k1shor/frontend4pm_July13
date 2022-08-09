import React, { useState } from 'react'
import { forgetPassword } from '../../api/userAPI'

const ForgetPassword = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const resetPassword = (e) => {
        setError('')
        setSuccess('')
        e.preventDefault()
        forgetPassword(email)
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
                    <label htmlFor='email'>Email</label>
                    <input type={'text'} id='email' className='form-control' onChange={e => setEmail(e.target.value)} value={email}/>
                    <button className='btn btn-warning mt-2 form-control' onClick={resetPassword}>Send Password Reset Link</button>
                </form>
            }
        </>
    )
}

export default ForgetPassword