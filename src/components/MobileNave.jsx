erimport React from 'react'
import navlogo from '/navlogo.png'
import { IoIosSearch } from "react-icons/io";

function MobileNave() {
  return (
    <>
            <div className="w-full flex justify-center px-5">
             <div className="flex w-full md:hidden fixed z-50 bottom-0 min-h-auto justify-center  bg-white shadow-2xl">
             
        
                <div className="w-full">
                  <ul className="flex justify-between items-center gap-10 text-slate-500 hover:text-slate-900 p-7">
                    <a href="#home"><li className="text-sm md:text-slate-500 hover:text-slate-900 md:text-xl font-extrabold">HOME</li></a>
                    <a href="#about"><li className="text-sm md:text-slate-500 hover:text-slate-900 md:text-xl font-extrabold">ABOUT</li></a>
                    <a href="#courses"><li className="text-sm md:text-slate-500 hover:text-slate-900 md:text-xl font-extrabold">COURSES</li></a>
                    <a href="#contact"><li className="text-sm md:text-slate-500' hover:text-slate-900 md:text-xl font-extrabold">CONTACT</li></a>
                  </ul>
                </div>
               
              </div>
      </div>
    </>
  )
}

export default MobileNave
