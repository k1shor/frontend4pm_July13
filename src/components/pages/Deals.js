import React from 'react'
import Product from '../Product'

const Deals = () => {
    return (
        <>
            <div className='row'>
                <div className='col-3 mt-5 ps-5'>
                    <h3 className='text-decoration-underline fw-bold text-info'>Deals</h3>
                    <ul className='list-unstyled fw-bold fs-5'>
                        <li>Deals of the Day</li>
                        <li>Most Popular</li>
                        <li>Flash Sale</li>
                    </ul>

                    <h3 className='text-decoration-underline fw-bold text-info mt-4'>Prices</h3>
                    <div className="form-check ps-0 mt-2">
                        <input className="form-check-input mt-2 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label fw-bold fs-5" htmlFor="flexRadioDefault1">
                            All
                        </label>
                    </div>
                    <div className="form-check ps-0 mt-2">
                        <input className="form-check-input mt-2 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label fw-bold fs-5" htmlFor="flexRadioDefault2">
                             0 - Rs. 1000
                        </label>
                    </div>
                    <div className="form-check ps-0 mt-2">
                        <input className="form-check-input mt-2 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        <label className="form-check-label fw-bold fs-5" htmlFor="flexRadioDefault3">
                            Rs. 1000 - Rs. 10000
                        </label>
                    </div>
                    <div className="form-check ps-0 mt-2">
                        <input className="form-check-input mt-2 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                        <label className="form-check-label fw-bold fs-5" htmlFor="flexRadioDefault5">
                            Rs. 10000 - Rs. 100000
                        </label>
                    </div>
                    <div className="form-check ps-0 mt-2">
                        <input className="form-check-input mt-2 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                        <label className="form-check-label fw-bold fs-5" htmlFor="flexRadioDefault4">
                            Rs. 100000 and above
                        </label>
                    </div>



                </div>
                <div className='col-9 mt-5'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </>
    )
}

export default Deals