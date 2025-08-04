import React from 'react'
import navlogo from '/navlogo.png'
import { Link } from 'react-router-dom'
import Loginpage from '../pages/Loginpage'
import { IoCartOutline } from "react-icons/io5";
function Navbar() {

  return (
    <>
      <section className="hidden md:flex md:fixed w-full min-h-auto justify-between  bg-white shadow-2xl">
        <div className="pt-3 ps- pb-3 md:p-5">
          <div className='flex'>
            <img className='w-20' src={navlogo} alt="" />
            <h1 className='hidden md:block font-bold text-xl pt-2'>Udemy</h1>
          </div>
        </div>

        <div className="w-full">
          <ul className="flex justify-evenly items-center gap-10 p-7 me-20">
            <a href="#home"><li className="text-sm md:text-slate-500 hover:text-slate-900 md:text-xl font-extrabold">HOME</li></a>
            <a href="#about"><li className="text-sm md:text-slate-500 hover:text-slate-900 md:text-xl font-extrabold">ABOUT</li></a>
            <a href="#courses"><li className="text-sm md:text-slate-500 hover:text-slate-900 md:text-xl font-extrabold">COURSES</li></a>
            <a href="#contact"><li className="text-sm md:text-slate-500 hover:text-slate-900 md:text-xl font-extrabold">CONTACT</li></a>
          </ul>
        </div>
        <div className='pt-8 pe-5'>
         <Link to={"/Cart"}><span className='text-2xl'><IoCartOutline /></span></Link>
        </div>
        <div className="hidden md:flex my-5 me-5">
         <Link to={"/Login"}><button className="md:flex bg-blue-600 rounded hover:bg-blue-500 text-white pt-2 px-10 h-10">SIGNIN</button>
         </Link>
        </div>
      </section>
    </>
  )
}

export default Navbar