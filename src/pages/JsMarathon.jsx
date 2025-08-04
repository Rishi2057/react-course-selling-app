import React from 'react'
import Navbar2 from '../components/Navbar2'
import JsMarathonNavheading from '../components/JsMarathonNavheading'
import video from '/marathon.mp4'
import { Link } from 'react-router-dom'

function JsMarathon() {
  return (
    <>
      <Navbar2 /><JsMarathonNavheading />

      <section className='min-h-screen pb-10  w-full'>
        {/* top head */}
        <div className='flex-row md:flex text-white min-h-fit w-full p-10 sm:p-15 md:p-20 lg:ps-50 lg:pe-50 bg-slate-900'>
          <div>
            <h1 className=' font-extrabold text-3xl md:text-5xl '>JavaScript - Marathon Interview Questions Series</h1>
            <h1 className=' md:text-3xl pt-5'>The Quintessential Guide For Cracking JavaScript Interviews For Developers World-wide</h1>
            <h4 className='pt-5'>Created by <span className='underline text-blue-500'>Nirmal Joshi</span> </h4>
          </div>
          <div className='md:w-[1000px] pt-5 md:flex md:items-center'>
            <video controls muted className='w-full h-70 hover:' src={video} frameborder="0"></video>
          </div>
        </div>
        {/* box */}
        <div className='pt-10 px-10 md:px-50'>
          <div className='border-1 min-h-fit pt-5 pb-5 px-10'>
            <h1 className='text-center font-bold md:text-2xl'>What you'll learn</h1>
            <ul className='list-disc pt-5 md:grid grid-cols-2 gap-5'>
              <li>Real-world JavaScript interviews questions asked in IT companies.</li>
              <li>Apply for JavaScript jobs anywhere in the world.</li>
              <li>JS Language, Arrays, OOJS, DOM & Web, Asynchronous JS, Map, Set, WeakMap & WeakSet (ES6 Data structure), Automated Testing</li>
              <li>Fast and friendly Q&A supports</li>
              <li>Q&As that you’ll need to become a JavaScript expert.</li>
              <li>Core concepts and features you need to know in JavaScript development.</li>
              <li>Lectures & topics focused on real-world coding problems.</li>

            </ul>
          </div>

        </div>
        {/* final */}
        <div className='px-10 pt-10'>
          <h1 className='font-bold'>Requirements</h1>
          <li className='list-disc'>Good to have basic JavaScript knowledge but not mandatory</li>
          <li className='list-disc'>Basic understanding of HTML and CSS helps but is NOT required</li>


          <h1 className='pt-5 font-bold'>Description</h1>
          <p>JavaScript will be the hot thing and isn’t going anywhere for the next 5 years!

            For several years now, we’ve seen a huge demand for JavaScript developers world-wide. If you want to get a programming job quickly, this is the language to learn. Not only that, there’s always something new coming up every now and then, so you need to be updated about the latest changes and industry trends.

            Others say that cracking JavaScript interviews is complicated. I say it is NOT! If you have the right resources and up-to date information - learning JavaScript is easy and fun. I have built this course for individuals who are facing difficulties in cracking JavaScript interviews - keeping one thing in mind - answering each and every question in the simplest of ways!</p>

          <h1 className='pt-5 font-bold'>Who this course is for:</h1>
          <li className='list-disc'>Beginner, Intermediate and Senior Javascript, UI/UX, MEAN Stack, MERN Stack developers</li>
          <li className='list-disc'>Those who want to master Asynchronous JavaScript, Callbacks, Promises, Async Await</li>
          <h1 className='font-bold mt-5'>Anyone looking to crack any level of JavaScript interview</h1>
<Link to={"/Purchase"}>
            <button className='bg-violet-700 hover:bg-violet-500 px-5 py-2 rounded mt-1 text-white'>Subscribe</button>
  
</Link>        </div>
      </section>

    </>
  )
}

export default JsMarathon