import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { resetPassword } from '../../api/userAPI'

const ResetPassword = () => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const {token} = useParams()

    const resetPasswordSubmit = (e) => {
        setError('')
        setSuccess('')
        e.preventDefault()
        resetPassword(token, password)
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
                    <input type={'text'} id='password' className='form-control' onChange={e => setPassword(e.target.value)} value={password}/>
                    <button className='btn btn-warning mt-2 form-control' onClick={resetPasswordSubmit}>Confirm Reset Password</button>
                </form>
            }
        </>
    )
}

export default ResetPassword