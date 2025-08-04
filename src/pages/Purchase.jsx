import React from 'react'
import Navbar2 from '../components/Navbar2'
import { IoMdLock } from "react-icons/io";

function Purchase() {
    return (
        <>
            <Navbar2 />
            <section className='min-h-fit pt-20 overflow-x-hidden'>
                <div className='md:flex md:ps-20 justify-evenly'>
                    {/* left */}
                    <div className='p-10 space-y-5'>
                        <h1 className='font-bold text-xl'>Checkout</h1>
                        <h2>Billing Adress</h2>

                        <div className='md:flex md:ps-10 gap-5'>
                            <div className='flex flex-col'>
                                <label htmlFor="country">Country</label>
                                <select className='border' id="country" defaultValue="">
                                    <option value="" disabled>Please select...</option>
                                    <option value="india">India</option>
                                </select>

                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="country">State / Union Territory</label>
                                <select className='border' id="country" defaultValue="">
                                    <option value="" disabled>Please select...</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Ladakh">Ladakh</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Puducherry">Puducherry</option>
                                </select>

                            </div>
                        </div>
                        <h6 className='text-sm font-extralight'>Udemy is required by law to collect applicable transaction taxes for purchases made <br /> in certain tax jurisdictions.</h6>
                        <div className='flex justify-between'>
                            <h1>Payment Method</h1>
                            <h1>Secure and encrypted</h1>
                        </div>
                        <div>
                            <div className='border md:w-100 rounded min-h-fit p-5  space-y-2'>
                                <label className='font-bold' htmlFor="card number">Card number</label>
                                <input placeholder='1234 5678 9012 3456' className='border w-full rounded px-2' type="text" />
                                <label className='font-bold' htmlFor="Expiry date">Expiry date</label>
                                <input placeholder='MM/YY' className='border w-full rounded px-2' type="text" />
                                <label className='font-bold' htmlFor="CVC/CVV">CVC/CVV</label>
                                <input placeholder='CVC' className='border w-full rounded px-2' type="text" />
                                <label className='font-bold' htmlFor="Name on card">Name on card</label>
                                <input placeholder='Name on card' className='border w-full rounded px-2' type="text" />
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className='bg-slate-200 md:min-h-screen p-10 space-y-5'>
                        <h1 className='font-bold text-xl'>Order Summary</h1>
                        <div className='grid grid-cols-2 gap-20'>
                            <div className='w-100'>
                                <h2>Original Price:</h2>
                                <h2>Discounts (85% Off):</h2>
                            </div>
                            <div>
                                <h2>₹3,779</h2>
                                <h2>-₹3,230</h2>
                            </div>
                        </div>
                        <hr />
                        <div className='grid grid-cols-2 gap-20'>
                            <div className='w-100'>
                                <h2>Total (1 course):</h2>

                            </div>
                            <div>
                                <h2>₹549</h2>

                            </div>
                        </div>
                        <h6 className='text-sm font-extralight'>By completing your purchase, you agree to these <span className='text-blue-500'>Terms of Use.</span></h6>

                            <button className='flex bg-blue-600 text-white px-5 py-2 rounded text-xl items-center'>
                               <span className=''><IoMdLock /></span> Pay ₹549
                            </button>

                    </div>
                </div>



            </section>
        </>
    )
}

export default Purchase