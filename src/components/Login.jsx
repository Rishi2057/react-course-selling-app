import React, { useEffect, useState } from 'react'

function Login({ isTrue }) {
    const [show, setShow] = useState()

    const handleChange = () => setShow(true)



    return (
        <>
            {show && isTrue ?<button onClick={handleChange} className='cursor-pointer text-blue-500 mt-3 px-6 ms-40 py-2'>Sign Up</button> :
                <button onClick={handleChange} className='cursor-pointer text-blue-500 mt-3 px-6 ms-40 py-2'>Login</button>}

            {show && isTrue ? <><h1 className='text-center text-5xl pt-10 font-bold'>Login In</h1><div className='flex justify-center mt-5'>
                <div className='flex-col space-y-5 w-full px-50'>
                    <label className='text-2xl uppercase' htmlFor="name">username</label> <br />
                    <input placeholder='Enter UserName' className='border w-full mt-1 py-2 ps-5 rounded' type="text" /> <br />
                    <label className='text-2xl uppercase' htmlFor="name">password</label> <br />
                    <input placeholder='Enter Password' className='border w-full mt-1 py-2 ps-5 rounded' type="text" />

                </div>
            </div></>
                :
                <><h1 className='text-center text-5xl pt-10 font-bold'>Sign Up</h1><div className='flex justify-center mt-5'>
                    <div className='flex-col space-y-5 w-full px-50'>


                        <label className='text-2xl uppercase' htmlFor="name">Name</label> <br />
                        <input placeholder='Enter Name' className='border w-full mt-1 py-2 ps-5 rounded' type="text" /> <br />


                        <label className='text-2xl uppercase' htmlFor="name">Phone numer</label> <br />
                        <input placeholder='Enter PhoneNo.' className='border w-full mt-1 py-2 ps-5 rounded' type="text" /> <br />

                        <label className='text-2xl uppercase' htmlFor="name">Email ID</label> <br />
                        <input placeholder='Enter UserName' className='border w-full mt-1 py-2 ps-5 rounded' type="text" /> <br />

                        <label className='text-2xl uppercase' htmlFor="name">password</label> <br />
                        <input placeholder='Enter Password' className='border w-full mt-1 py-2 ps-5 rounded' type="text" />
                    </div>

                </div></>



            }
        </>
    )
}

export default Login