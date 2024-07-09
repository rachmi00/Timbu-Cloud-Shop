import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Interest from '../components/Interest'
import "./Cart.css"

const Checkout = () => {
    return (
        <div className=' checkout'>  
            <div className="container mt-5">
                <main>


                    <div className="row g-5">
             
                        <div className="col-md-7 col-lg-8">

                            <form className="needs-validation" novalidate>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label for="firstName" className="form-label d-flex align-content-start ">First Name*</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="Jane" required />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <label for="lastName" className="form-label d-flex align-content-start">Last Name*</label>
                                        <input type="text" className="form-control" id="LastName" placeholder="Doe" required />
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <label for="email" className="form-label d-flex align-content-start mt-2">Email Address*</label>
                                        <div className="input-group has-validation">
                                            <span className='input-goup-text'></span>
                                            <input type="email" className="form-control" id="email" placeholder="fake@example,com" required />
                                        </div>

                                        <div className="invalid-feedback">
                                            Valid email is required.
                                        </div>
                                    </div>

                                    <div className="col-sm-6 ">
                                        <label for="phoneNumber" className="form-label d-flex align-content-start  mt-2">Phone Number*</label>
                                        <div className='input-group has-validation' >
                                        <input type="tel" className="form-control" id="LastName" placeholder="+237" required />

                                            <div className="invalid-feedback">
                                                Valid phone number is required.
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-12">
                                    <label for="address" className="form-label d-flex align-content-start  mt-2">Address Line 1*</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="address2" className="form-labe d-flex align-content-startl  mt-2">Address Line 2</label>
                                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                </div>

                                <div className="row gy-3">
                                    <div className="col-md-6">
                                        <label for="state" className="form-label d-flex align-content-start  mt-2">State</label>
                                        <select className="form-select" id="state" required>
                                            <option value="">Choose...</option>
                                            <option>Oyo</option>
                                            <option value="">Kaduna</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label for="country" className="form-label d-flex align-content-start  mt-2">Country</label>
                                        <select className="form-select" id="country" required>
                                            <option value="">Choose...</option>
                                            <option>Nigeria</option>
                                            <option value="">Cameroon</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label for="zip" className="form-label d-flex align-content-center">Post Code*</label>
                                        <input type="text" className="form-control" id="zip" placeholder="Post Code" required />
                                        <div className="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>
                                </div>


                                <h5 className=" d-flex mb-3 align-self-lg-start mt-3">Payment Option</h5>

                                <div className="row gy-3">
                                    <div className="col-md-6">
                                        <label for="cc-name" className="form-label">Name on card*</label>
                                        <input type="text" className="form-control" id="cc-name" placeholder="Name on card" required />

                                        <div className="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label for="cc-number" className="form-label">Card number*</label>
                                        <input type="text" className="form-control" id="cc-number" placeholder="Enter your card number" required />
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label for="cc-expiration" className="form-label">Expiry Date*</label>
                                        <input type="text" className="form-control" id="cc-expiration" placeholder="00/00/00" required />
                                        <div className="invalid-feedback">
                                            Expiration date required
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label for="cc-cvv" className="form-label">CVV*</label>
                                        <input type="text" className="form-control" id="cc-cvv" placeholder="000" required />
                                        <div className="invalid-feedback">
                                            Security code required
                                        </div>
                                    </div>
                                </div>

                                <hr className="my-4" />

                                <button className="w-100 btn btn-success btn-lg mb-lg-5" type="submit">Make Payment</button>
                            </form>
                        </div>
                        <div className="col-md-5 col-lg-4 order-md-last  ">
                            <div className='order-border'>
                                <h4 className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="fs-6 ms-5">Order Summary</span>

                                </h4>
                                <ul className="mb-3 d-block ">
                                    <li className="list-group-item list-unstyled d-flex justify-content-between lh-sm p-2">
                                        <div>
                                            <h6 className="my-0">Items</h6>
                                        </div>
                                        <span className="text-muted">4</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-sm p-2">
                                        <div>
                                            <h6 className="my-0">Delivery</h6>

                                        </div>
                                        <span className="text-muted">₦5000</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-sm p-2">
                                        <div>
                                            <h6 className="my-0">Services</h6>
                                        </div>
                                        <span className="text-muted">₦3500</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between p-2">
                                        <span>Total </span>
                                        <strong>₦1,648,500</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
                <Interest className="mt-lg-5" />

            </div>

        </div>
    )
}

export default Checkout