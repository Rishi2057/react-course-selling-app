import React from 'react'
import Navbar2 from '../components/Navbar2'
import AsynchNavheading from '../components/AsynchNavheading'
import video from '/WhatsApp Video 2025-08-03 at 17.14.33_ff872dfc.mp4'
import { Link } from 'react-router-dom'

function Asynchronous() {
  return (



    <>

      <Navbar2 /><AsynchNavheading />

      <section className='min-h-screen pb-10  w-full'>
        {/* top head */}
               <div className='flex-row md:flex text-white min-h-fit w-full p-10 sm:p-15 md:p-20 lg:ps-50 lg:pe-50 bg-slate-900'>
          <div>
            <h1 className=' font-extrabold text-3xl md:text-5xl '>Asynchronous JavaScript: Promises, Callbacks, Async Await</h1>
            <h1 className=' md:text-3xl pt-5'>Become an expert in Asynchronous JavaScript: Promises, Callbacks, Async Await, Event Loop, etc.</h1>
            <h4 className='pt-5'>Created by <span className='underline text-blue-500'>Viktor Pyskunov</span> </h4>
          </div>
          <div className='md:w-[1000px] pt-5 md:flex md:items-center'>
          <video  controls muted className='w-full md:w-100 h-70 hover:' src={video} frameborder="0"></video>
          </div>
        </div>
        {/* box */}
        <div className='pt-10 px-10 md:px-50'>
          <div className='border-1 min-h-fit pt-5 pb-5 px-10'>
            <h1 className='text-center font-bold md:text-2xl'>What you'll learn</h1>
            <ul className='list-disc pt-5 md:grid grid-cols-2 gap-5'>
              <li>Learn fundamental concepts of Asynchronous JavaScript</li>
              <li>Using Callbacks: Pros and Cons, when to use and how to test them</li>
              <li>In-depth understanding of the Event Loop</li>
              <li>Unit Testing of asynchronous functions</li>
              <li>Github repository with all the code included</li>
              <li>Everything you need to know about Promises</li>
              <li>Async / Await - the modern way of handling asynchronous tasks in JavaScript</li>
              <li>Learn how JavaScript Engine executes code behind the scenes</li>
              <li>No fluff, direct and to the point</li>
            </ul>
          </div>

        </div>
        {/* final */}
        <div className='px-10 pt-10'>
          <h1 className='font-bold'>Requirements</h1>
          <li className='list-disc'>Basic of JavaScript</li>

          <h1 className='pt-5 font-bold'>Description</h1>
          <p>My main goal is to help you master Asynchronous JavaScript. This course was specifically designed for those who want to improve their skills in Callbacks, Promises, Async Await, and Event Loop. This course was designed to be easy to understand, and therefore there are a lot of visuals in it, especially when we are talking about important concepts. You will also see a lot of coding examples along the way.

            We will be talking about 3 main components of Async JavaScript: Callback functions, Promises, and Async Await.

            Callbacks in JavaScript are used everywhere. Creating event handlers, making HTTP requests, interacting with the DOM, setting timeouts, reading or writing data to the filesystem, working with databases, etc. I am pretty sure you are already using callbacks in your code, but I am not sure if you know how they actually work... Knowing how things really work will help you write your code faster and avoid weird bugs.

            Promises were created as a better alternative to callbacks. They don't have drawbacks that callbacks have. JavaScript promises are incredibly helpful when you have several asynchronous operations that depend on each other. However, promises are a new concept which you have to learn, and this course will help you with that.

            Async Await is a syntactic sugar around Promises introduced in EcmaScript 8. Before that writing asynchronous code in JavaScript was very different from writing ordinary synchronous code. Async await allows you to structure all your code in a similar way, no matter if it's synchronous or asynchronous.

            There is a lot of asynchronous stuff going on in popular JavaScript libraries and frameworks: React, Angular, Vue.js, jQuery, etc. In NodeJS it's almost impossible to write anything without using asynchronous operations. After watching this course you will be able to read and write asynchronous JavaScript code effectively, and you will definitely understand how it works behind the scenes!

            P. S. Made in Ukraine</p>

            <h1 className='pt-5 font-bold'>Who this course is for:</h1>
            <li className='list-disc'>Developers with basic JavaScript knowledge</li>
            <li className='list-disc'>Those who want to master Asynchronous JavaScript, Callbacks, Promises, Async Await</li>
          <h1 className='font-bold mt-5'>Subscribe to Udemy’s top courses</h1>
<Link to={"/Purchase"}>
            <button className='bg-violet-700 hover:bg-violet-500 px-5 py-2 rounded mt-1 text-white'>Subscribe</button>
  
</Link>        </div>
      </section>

    </>
  )
}

export default Asynchronous