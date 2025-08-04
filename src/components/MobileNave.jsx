import React from 'react'
import navlogo from '/navlogo.png'
import { IoIosSearch } from "react-icons/io";

function MobileNave() {
  return (
    <>
             <section className="flex w-full md:hidden fixed z-50 bottom-0 min-h-auto justify-between  bg-white shadow-2xl">
             
        
                <div className="w-full">
                  <ul className="flex justify-evenly items-center gap-10 text-slate-500 hover:text-slate-900 p-7 me-20">
                    <a href="#home"><li className="text-sm md:text-slate-500 hover:text-slate-900 md:text-xl font-extrabold">HOME</li></a>
                    <a href="#about"><li className="text-sm md:text-slate-500 hover:text-slate-900 md:text-xl font-extrabold">ABOUT</li></a>
                    <a href="#courses"><li className="text-sm md:text-slate-500 hover:text-slate-900 md:text-xl font-extrabold">COURSES</li></a>
                    <a href="#contact"><li className="text-sm md:text-slate-500' hover:text-slate-900 md:text-xl font-extrabold">CONTACT</li></a>
                  </ul>
                </div>
               
              </section>
    </>
  )
}

export default MobileNave
