import React, { useState } from 'react'

function SignUp() {
      const [show, setShow] = useState(false)

    const handleChange = () => setShow(true)
    return (
        <>
            <h1 className='text-center text-5xl pt-10 font-bold'>Sign Up</h1>
            <div className='flex justify-center mt-5'>
                <div className='flex-col space-y-5 w-full px-50'>

                    
                    <label className='text-2xl uppercase' htmlFor="name">Name</label> <br />
                    <input placeholder='Enter Name' className='border w-full mt-1 py-2 ps-5 rounded' type="text" /> <br />

                    
                    <label className='text-2xl uppercase' htmlFor="name">Phone numer</label> <br />
                    <input placeholder='Enter PhoneNo.' className='border w-full mt-1 py-2 ps-5 rounded' type="text" /> <br />

                    <label className='text-2xl uppercase' htmlFor="name">Email ID</label> <br />
                    <input placeholder='Enter UserName' className='border w-full mt-1 py-2 ps-5 rounded' type="text" /> <br />

                    <label className='text-2xl uppercase' htmlFor="name">password</label> <br />
                    <input placeholder='Enter Password' className='border w-full mt-1 py-2 ps-5 rounded' type="text" />
                    <button onClick={handleChange} className='bg-blue-500 text-2xl text-white rounded mt-3 px-6 ms-40 py-2'>Login</button>
                </div>
            </div>
            </>
            )
}

            export default SignUp