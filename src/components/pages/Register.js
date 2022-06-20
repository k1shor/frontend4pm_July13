import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
    <main className="form-signin w-50 m-auto mx-auto p-5 mt-5 shadow-lg">
                <form>
                    <div className='text-center'>
                    <img className="mb-4" src="./mobile_img/realme.png" alt="" width="72" height="57" /></div>
                    <h1 className="h3 mb-3 fw-normal">Register</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingfirstname" placeholder="first name" />
                        <label htmlFor="floatingfirstname">First Name</label>
                    </div>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatinglastname" placeholder="last name" />
                        <label htmlFor="floatinglastname">Last Name</label>
                    </div>

                    <div className="form-floating">
                        <input type="date" className="form-control" id="floatingdate" placeholder="Date of Birth" />
                        <label htmlFor="floatingdate">Date of Birth</label>
                    </div>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingaddress" placeholder="Address" />
                        <label htmlFor="floatingaddress">Address</label>
                    </div>

                    <div className="form-floating">
                        <input type="number" className="form-control" id="floatingphone" placeholder="Phone number" />
                        <label htmlFor="floatingphone">Phone Number</label>
                    </div>
                    
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingCPassword" placeholder="Confirm Password" />
                        <label htmlFor="floatingCPassword">Confirm Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> I accept the terms and conditions.
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                    Already have an account. <Link to ='/signin'>Sign in</Link>


                    <p classNameName="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>
    </>
  )
}

export default Register