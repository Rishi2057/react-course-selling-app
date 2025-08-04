import React from 'react'
import Navbar2 from '../components/Navbar2'
import development1 from '/development1.webp'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
    <Navbar2 />
    <section className='h-screen pt-30'>
        <h1 className='text-6xl font-extrabold text-center'>Shopping Cart</h1>
        <div className='p-15 '> 
            <div className="w-full md:flex rounded overflow-hidden shadow-lg bg-white border border-gray-200">
              <img className="md:w-60" src={development1} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl pt-5 mb-2">Java Tutorial for Complete Beginners</div>
                <p className="text-gray-700 text-base ">
                  Learn to program using the Java programming language
                </p>
              </div>
              <div className="px-6 pt-12 pb-2">
                <span className="inline-block bg-blue-300 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Premium</span>
                <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">New</span>

              </div>
              <div className="px-6 pt-10 py-4">

                <Link to={"/Purchase"}>
                    <button className="bg-blue-800 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
                      Subscribe
                    </button>
                </Link>
             

              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Cart