import React from 'react'
import Navbar2 from '../components/Navbar2'
import health1 from '/health1.jpg'
import health2 from '/health2.webp'
import health3 from '/health3.webp'
import health4 from '/health4.webp'

import marketing1 from '/marketing1.webp'
import marketing2 from '/marketing2.webp'
import marketing3 from '/marketing3.webp'
import marketing4 from '/marketing4.webp'

import business1 from '/business1.webp'
import business2 from '/business2.webp'
import business3 from '/business3.webp'
import business4 from '/business4.jpg'

import development1 from '/development1.webp'
import development2 from '/development2.jpg'
import development3 from '/development3.webp'
import development4 from '/development4.webp'
import ModalCart from '../components/ModalCart'




function BrowseCollection() {



  return (
    <>
      <Navbar2 />
      <section className='h-screen pt-40'>
        {/* section1 */}
        <div className='ps-15'>
          <h1 className='text-4xl font-extrabold'>Development Courses</h1>
          <h1 className='pt-10 font-bold text-2xl'>Courses to get you started</h1>
        </div>
        {/* Development */}
        <div className='px-5 pb-10 border-b'>
          <div className="p-10 gap-5 md:flex justify-evenly">
            {/* card1 */}
            <div className="max-w-fit rounded overflow-hidden shadow-lg bg-white border border-gray-200">
              <img className="w-[900px]" src={development1} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Java Tutorial for Complete Beginners</div>
                <p className="text-gray-700 text-base ">
                  Learn to program using the Java programming language
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-blue-300 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Premium</span>
                <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">New</span>

              </div>
              <div className="px-6 py-4">

               <ModalCart/>

              </div>
            </div>
            <br />
            {/* card2 */}
            <div className="max-w-fit rounded overflow-hidden shadow-lg bg-white border border-gray-200">
              <img className="w-full" src={development2} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Complete Python Bootcamp From Zero to Hero in Python</div>
                <p className="text-gray-700 text-base ">Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-blue-300 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Premium</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Lowest Price</span>
              </div>
              <div className="px-6 py-4">
                <ModalCart/>
              </div>
            </div>
            <br />
            {/* card3 */}
            <div className="max-w-fit rounded overflow-hidden shadow-lg bg-white border border-gray-200">
              <img className="w-full" src={development3} alt="Card Image" />
              <div className="px-6 py-4 pb-15">
                <div className="font-bold text-xl mb-2 ">100 Days of Code: The Complete Python Pro Bootcamp</div>
                <p className="text-gray-700 text-base ">
                  Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!
                </p>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-blue-300 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Premium</span>
                  <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Featured</span>

                </div>
              </div>
              <div className="px-6 py-4 mb-8">
                <ModalCart/>
              </div>
            </div>
            <br />
            {/* card4 */}
            <div className="max-w-fit rounded overflow-hidden shadow-lg bg-white border border-gray-200">
              <img className="w-full" src={development4} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Complete Full-Stack Web Development Bootcamp</div>
                <p className="text-gray-700 text-base ">
                  Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Featured</span>
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">New</span>
              </div>
              <div className="px-6 py-4">
                <ModalCart/>
              </div>
            </div>
          </div>
        </div>
        {/* section2 */}
        <div className='pt-15 ps-15'>
          <h1 className='text-4xl font-extrabold'>Business Courses</h1>
          <h1 className='pt-10 font-bold text-2xl'>Courses to get you started</h1>
        </div>
        {/* business */}
        <div className='px-5 pb-10 border-b'>
          <div className="p-10 gap-5 md:flex justify-evenly">
            {/* card1 */}
            <div className="max-w-fit rounded overflow-hidden shadow-lg bg-white border border-gray-200">
              <img className="w-full" src={business1} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Complete SQL Bootcamp: Go from Zero to Hero Premium Bestseller</div>
                <p className="text-gray-700 text-base "> Become an expert at SQL!</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-blue-300 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Premium</span>
                <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">New</span>

              </div>
              <div className="px-6 py-4">

                <ModalCart/>

              </div>
            </div>
            <br />
            {/* card2 */}
            <div className="max-w-fit rounded overflow-hidden shadow-lg bg-white border border-gray-200">
              <img className="w-full" src={business2} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">An Entire MBA in 1 Course:Award Winning Business School Prof</div>
                <p className="text-gray-700 text-base ">
                  ** #1 Best Selling Business Course! ** Everything You Need to Know About Business from Start-up to IPO
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-blue-300 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Premium</span>

                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Lowest
                  Price</span>
              </div>
              <div className="px-6 py-4">
                <ModalCart/>
              </div>
            </div>
            <br />
            {/* card3 */}
            <div className="max-w-fit rounded overflow-hidden shadow-lg bg-white border border-gray-200">
              <img className="w-full" src={business3} alt="Card Image" />
              <div className="px-6 py-4 pb-15">
                <div className="font-bold text-xl mb-2 ">Zero to Hero in SQL: SQL for Data Analytics</div>
                <p className="text-gray-700 text-base ">
                  SQL course covering basic to advanced SQL topics for SQL Database (PostgreSQL). Beginner friendly SQL training
                </p>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-blue-300 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Premium</span>
                  <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Featured</span>

                </div>
              </div>
              <div className="px-6 py-4 mb-8">
                <ModalCart/>
              </div>
            </div>
            <br />
            {/* card4 */}
            <div className="max-w-fit rounded overflow-hidden shadow-lg bg-white border border-gray-200">
              <img className="w-full" src={business4} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Microsoft Power BI Desktop for Business Intelligence</div>
                <p className="text-gray-700 text-base ">
                  Master Power BI Desktop for data prep, data analysis, data visualization & dashboard design w/ top Power BI instructors!
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Featured</span>
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">New</span>
              </div>
              <div className="px-6 py-4">
                <ModalCart/>
              </div>
            </div>
          </div>
        </div>
        {/* section3 */}
        <div className='pt-15 ps-15'>
          <h1 className='text-4xl font-extrabold'>Marketing Courses</h1>
          <h1 className='pt-10 font-bold text-2xl'>Courses to get you started</h1>
        </div>
        {/* marketing */}
        <div className='px-5 pb-10 border-b'>
          <div className="p-10 gap-5 md:flex justify-evenly">
            {/* card1 */}
            <div className="max-w-fit rounded overflow-hidden shadow-lg bg-white border border-gray-200">
              <img className="w-full" src={marketing1} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Complete Digital Marketing Course - 12 Courses in 1</div>
                <p className="text-gray-700 text-base ">
                  Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-blue-300 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Premium</span>
                <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">New</span>

              </div>
              <div className="px-6 py-4">

               <ModalCart/>

              </div>
            </div>
            <br />
            {/* card2 */}
            <div className="max-w-fit rounded overflow-hidden shadow-lg bg-white border border-gray-200">
              <img className="w-full" src={marketing2} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">SEO Training: Complete SEO Course & ChatGPT SEO Copywriting</div>
                <p className="text-gray-700 text-base ">
                  SEO Guide: SEO Copywriting, Content Marketing, SEO Link Building, ChatGPT SEO, WordPress SEO, WooCommerce SEO, Local SEO
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-blue-300 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Premium</span>

                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Lowest
                  Price</span>
              </div>
              <div className="px-6 py-4">
                <ModalCart/>
              </div>
            </div>
            <br />
            {/* card3 */}
            <div className="max-w-fit rounded overflow-hidden shadow-lg bg-white border border-gray-200">
              <img className="w-full" src={marketing3} alt="Card Image" />
              <div className="px-6 py-4 pb-15">
                <div className="font-bold text-xl mb-2 ">Digital Marketing Masterclass: AI & Social Media Marketing</div>
                <p className="text-gray-700 text-base ">
                  100s of Digital Marketing Skills: Generative AI Marketing, Social Media Marketing, SEO, Google Ads, Facebook, Email +
                </p>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-blue-300 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Premium</span>
                  <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Featured</span>

                </div>
              </div>
              <div className="px-6 py-4 mb-8">
                <ModalCart/>
              </div>
            </div>
            <br />
            {/* card4 */}
            <div className="max-w-fit rounded overflow-hidden shadow-lg bg-white border border-gray-200">
              <img className="w-full" src={marketing4} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Complete Digital Marketing Guide - 27 Courses in 1</div>
                <p className="text-gray-700 text-base ">
                  Digital Marketing, Social Media, ChatGPT, Prompt Engineering, Google Ads, Facebook, SEO, WordPress, Instagram, YouTube.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Featured</span>
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">New</span>
              </div>
              <div className="px-6 py-4">
               <ModalCart/>
              </div>
            </div>
          </div>
        </div>
        {/* section4 */}
        <div className='pt-15 ps-15'>
          <h1 className='text-4xl font-extrabold'>Health & Fitness Courses</h1>
          <h1 className='pt-10 font-bold text-2xl'>Courses to get you started</h1>
        </div>
        {/* health */}
        <div className='px-5 pb-10 border-b'>
          <div className="p-10 gap-5 md:flex justify-evenly">
            {/* card1 */}
            <div className="max-w-fit rounded overflow-hidden shadow-lg bg-white border border-gray-200">
              <img className="w-full" src={health1} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">CBT Practitioner Course (Cognitive Behavioral Therapy)</div>
                <p className="text-gray-700 text-base ">Learn how Cognitive Behavioral Therapy (CBT) equips people to improve their emotional intelligence + mental well-being.</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-blue-300 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Premium</span>
                <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">New</span>

              </div>
              <div className="px-6 py-4">

             <ModalCart/>

              </div>
            </div>
            <br />
            {/* card2 */}
            <div className="max-w-fit rounded overflow-hidden shadow-lg bg-white border border-gray-200">
              <img className="w-full" src={health2} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Meditation Masterclass: meditation teacher certification</div>
                <p className="text-gray-700 text-base ">
                  Accredited meditation certification course. Learn & teach a wide range of meditation techniques from around the world!
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-blue-300 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Premium</span>

                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Lowest
                  Price</span>
              </div>
              <div className="px-6 py-4">
                <ModalCart/>
              </div>
            </div>
            <br />
            {/* card3 */}
            <div className="max-w-fit rounded overflow-hidden shadow-lg bg-white border border-gray-200">
              <img className="w-full" src={health3} alt="Card Image" />
              <div className="px-6 py-4 pb-15">
                <div className="font-bold text-xl mb-2 ">Herbalism :: Introduction & Medicine Making Certificate</div>
                <p className="text-gray-700 text-base ">
                  Take charge of your health with herbal medicine. Using herbs and natural holistic medicine is easy, effective and safe.
                </p>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-blue-300 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Premium</span>
                  <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Featured</span>

                </div>
              </div>
              <div className="px-6 py-4 mb-8">
                <ModalCart/>
              </div>
            </div>
            <br />
            {/* card4 */}
            <div className="max-w-fit rounded overflow-hidden shadow-lg bg-white border border-gray-200">
              <img className="w-full" src={health4} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Complete Fitness & Health Masterclass - 21 Courses in 1</div>
                <p className="text-gray-700 text-base ">
                  The Most Comprehensive Masterclass to Improve Your Mind, Body and Health - Start Growing Today!
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Featured</span>
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">New</span>
              </div>
              <div className="px-6 py-4">
                <ModalCart/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BrowseCollection