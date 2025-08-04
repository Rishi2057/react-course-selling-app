import React from 'react'
import { FaStar } from "react-icons/fa6";

function JavaFullNavheading() {
    return (
        <>
            <section className="flex z-40 w-full  justify-between sticky top-0  bg-black">
                <div className='relative min-h-full md:h-[80px] md:w-full py-2 md:pt-5 ps-5'>
                    <h1 className='text-white font-bold'>The Complete JavaScript Course 2025: From Zero to Expert!</h1>
                    <p className='flex text-white text-sm'><span className='bg-cyan-600 px-1 text-sm me-2' >Best Seller</span><span className='text-amber-400 flex pe-1'>4.7 <FaStar /></span> (226,007 ratings) 996,231 students</p>
                </div>
            </section>
        </>
    )
}

export default JavaFullNavheading