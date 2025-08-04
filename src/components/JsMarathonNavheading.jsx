import React from 'react'
import { FaStar } from "react-icons/fa6";

function JsMarathonNavheading() {
  return (
    <>
         <section className="flex z-40 w-full  justify-between sticky top-0  bg-black">
                        <div className='relative min-h-full md:h-[80px] md:w-full py-2 md:pt-5 ps-5'>
                            <h1 className='text-white font-bold'>JavaScript - Marathon Interview Questions Series</h1>
                            <p className='flex text-white text-sm'><span className='text-amber-400 flex pe-1'>4.6 <FaStar /></span> (12,90 ratings) 10,720 students</p>
                        </div>
                    </section>
    </>
  )
}

export default JsMarathonNavheading