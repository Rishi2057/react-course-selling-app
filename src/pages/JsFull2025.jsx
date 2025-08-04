import Navbar2 from '../components/Navbar2'
import video from '/fulljava.mp4'
import JavaFullNavheading from '../components/JavaFullNavheading'
import { Link } from 'react-router-dom'

function JsFull2025() {
  return (
    <>
      <Navbar2 /><JavaFullNavheading />

      <section className='min-h-screen pb-10  w-full'>
        {/* top head */}
        <div className='flex-row md:flex text-white min-h-fit w-full p-10 sm:p-15 md:p-20 lg:ps-50 lg:pe-50 bg-slate-900'>
          <div>
            <h1 className=' font-extrabold text-3xl md:text-5xl '>The Complete JavaScript Course 2025: From Zero to Expert!</h1>
            <h1 className=' md:text-3xl pt-5'>The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!</h1>
            <h4 className='pt-5'>Created by <span className='underline text-blue-500'>Jonas Schmedtmann</span> </h4>
          </div>
          <div className='md:w-[1000px] pt-5 md:flex md:items-center'>
            <video controls muted poster='' className='w-full md:w-100 h-70 hover:' src={video} frameborder="0"></video>
          </div>
        </div>
        {/* box */}
        <div className='pt-10 px-10 md:px-50'>
          <div className='border-1 min-h-fit pt-5 pb-5 px-10'>
            <h1 className='text-center font-bold md:text-2xl'>What you'll learn</h1>
            <ul className='list-disc pt-5 md:grid grid-cols-2 gap-5'>
              <li>Become an advanced, confident, and modern JavaScript developer from scratch</li>
              <li>Become job-ready by understanding how JavaScript really works behind the scenes</li>
              <li>JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, etc.</li>
              <li>Modern OOP: Classes, constructors, prototypal inheritance, encapsulation, etc.</li>
              <li>Asynchronous JavaScript: Event loop,</li>
              <li>Build 6 beautiful real-world projects for your portfolio (not boring toy apps)</li>
              <li>How to think and work like a developer: problem-solving, researching, workflows</li>
              <li>Modern ES6+ from the beginning: arrow functions, destructuring, spread operator, optional chaining (ES2020), etc.</li>
              <li>Complex concepts like the 'this' keyword, higher-order functions, closures, etc.</li>
              <li>How to architect your code using flowcharts</li>
            </ul>
          </div>

        </div>
        {/* final */}
        <div className='px-10 pt-10'>
          <h1 className='font-bold'>Requirements</h1>
          <li className='list-disc'>No coding experience is necessary to take this course! I take you from beginner to expert!</li>
          <li className='list-disc'>Any computer and OS will work — Windows, macOS or Linux. We will set up your text editor the course.</li>
          <li className='list-disc'>A basic understanding of HTML and CSS is a plus, but not a must! The course includes an HTML and CSS crash course.</li>

          <h1 className='pt-5 font-bold'>Description</h1>
          <p><span className='font-bold underline'>The #1 bestselling JavaScript course on Udemy!</span> <br />
            <span className='font-bold underline'>Just updated with ES2024 and ES2025!</span> <br />
            "Really, really well made course. Super in-depth, with great challenges and projects that will solidify your Javascript understanding. I found the lectures were paced perfectly -- Jonas doesn't skip over anything that might be useful to a JS developer" — Carson Bartholomew
            JavaScript is the most popular programming language in the world. It powers the entire modern web. It provides millions of high-paying jobs all over the world.
            That's why you want to learn JavaScript too. And you came to the right place!</p>

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

export default JsFull2025