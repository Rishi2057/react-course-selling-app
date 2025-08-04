import React from 'react'
import navlogo from '/navlogo.png'
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

function Navbar2() {
  return (
    <>
         <section className="flex overflow-x-hidden  absolute z-50 w-full h-[80px] md:min-h-auto md:justify-between  bg-white shadow-xl">
                <div className="pt-3 ps- pb-3 md:p-5">
                   <div className='py-1 md:py-0'>
                    <img className='w-17' src={navlogo} alt="" />
                   </div>
                </div>
               
                <div className="ps-10 md:ps-0  md:w-1/2 w-50 lg:w-50   md:flex  justify-center py-5 md:py-6">
                   <input className='bg-white  px-3 py-2 md:w-[25rem] rounded absolute border' type="text" placeholder='search' />
                   <button className='text-xl left-50 md:left-45 top-2 md:top-0.5 cursor-pointer relative'><IoIosSearch /></button>
                </div>
                
                <div className="hidden md:flex my-5 me-5">
                    <Link to={"/Login"}>
                      <button
                          className="md:flex bg-blue-600 rounded hover:bg-blue-500 text-white pt-2 px-10 h-10"><a
                              href="">SIGNIN</a></button>
                    </Link>
                </div>
            </section>
    </>
  )
}

export default Navbar2
