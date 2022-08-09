import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { confirmUser } from '../../api/userAPI'

const UserConfirmation = () => {
    const params = useParams()
    const token = params.token
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(()=>{
        confirmUser(token)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(true)
            }
        })
        .catch(err=>console.log(err))
    },[])

    const showError = () => {
        if(error){
            return <div className='alert alert-danger text-center'>{error}</div>
        }
    }

    const showSuccess = () => {
        if(success){
            return <div className='alert alert-success text-center'>User verified successfully.</div>
        }

    }

  return (
    <div>
        {showError()}
        {showSuccess()}
    </div>
  )
}

export default UserConfirmation