import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authenticate, isAuthenticated, signIn } from '../../api/userAPI'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { user } = isAuthenticated()

    const handleSignIn = (e) => {
        e.preventDefault()
        setSuccess(false)
        setError('')
        signIn(email, password)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setSuccess(true)
                    authenticate(data)
                }
            })
            .catch(error => console.log(error))
    }
    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const redirect = () => {
        if (success) {
            if (user && user.role === 0) {
                return navigate('/admin/dashboard')
            }
            else {
                return navigate('/user/profile')
            }
        }
    }


    return (
        <>
        <Navbar/>
            <main className="form-signin w-50 m-auto mx-auto p-5 mt-5 shadow-lg">
                <form>
                    {showError()}
                    {redirect()}
                    <div className='text-center'>
                        <img className="mb-4" src="./mobile_img/realme.png" alt="" width="72" height="57" /></div>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSignIn}>Sign in</button>
                    <div className='d-flex justify-content-between'>
                        <Link to='/forgetpassword'>Forgot Password</Link>
                        <Link to='/resendverification'>Resend Verification Link</Link>
                    </div>
                    Do not have an account. <Link to='/register'>Register</Link>


                    <p classNameName="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>
            <Footer/>
        </>
    )
}

export default Signin