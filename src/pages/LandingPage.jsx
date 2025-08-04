import home from '/homepage.jpg'
import card from '/asy.webp'
import card1 from '/js.webp'
import card2 from '/js2.webp'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MobileNave from '../components/MobileNave'
import Footer from '../components/Footer'

function LandingPage() {
    const navigate = useNavigate()

    return (
        <>
            <Navbar />
            <section id="home" className="w-full md:h-screen"
                style={{ background: `url(${home})`, backgroundPosition: 'center', backgroundSize: "cover" }}>
                <div className="justify-center ps-10 pe-10 pt-30 md:p-60 pb-30">
                    <h1 className="text-3xl font-bold  md:text-4xl">Learn Anything. Anywhere. Anytime.</h1>
                    <br />
                    <h1 className="text-2xl font-semi md:text-3xl ">Join thousands of learners. Get access to premium courses by
                        industry
                        experts.</h1>


                    <button onClick={() => navigate("/collection")} className="bg-blue-500 pt-1 pb-1 pe-3 ps-3 rounded cursor-pointer font-semibold hover:text-white mt-5">Browse Collection</button>
                </div>

            </section>


            <section id="about" className="bg-slate-200 scroll-p-[2rem] pt-10">
                <h1 className="flex justify-center p-5 md:pt-15 text-4xl font-bold">About US</h1>
                <div className="p-5 md:flex justify-between md:p-10">

                    <div className="pe-15 ps-10">
                        <p className="text-justify">At LearnHub, we believe that learning should be accessible, engaging, and
                            empowering. Our mission is to
                            make high-quality education available to everyone, regardless of location or background.
                            <br />

                            We offer a wide range of expert-led online courses in technology, business, design, health, personal
                            development, and more. Whether you're a student, a working professional, or simply passionate about
                            learning, our platform is designed to help you grow at your own pace.</p>
                    </div>

                    <div className="pe-15 ps-10">
                        <h1 className="text-2xl font-semibold pb-2">🌟 What Makes Us Different?</h1>

                        <ul>
                            <li className="p-1"> * Over 1,000+ expertly crafted video lessons</li>
                            <li className="p-1"> * Certified instructors from top industries and institutions</li>
                            <li className="p-1"> * Self-paced learning with lifetime access</li>
                            <li className="p-1"> * Real-world project-based content</li>
                            <li className="p-1"> * Affordable pricing with regular updates</li>
                            <li className="p-1"> * Recognized certificates to boost your resume</li>
                        </ul>

                        <p className="pt-2 font-semibold">
                            We’re proud to have helped thousands of learners build skills, change careers, and achieve their
                            goals.
                            Join the LearnHub community and start your journey today!
                        </p>
                    </div>
                </div>

            </section>


            <section id="courses" className="pt-10">
                <h1 className="flex justify-center p-5 md:pt-15 text-4xl font-bold">COURSES</h1>
                <div className="p-10 gap-5 md:flex justify-evenly">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200">
                        <img className="w-full" src={card} alt="Card Image" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Asynchronous JavaScript: Promises, Callbacks, Async Await</div>
                            <p className="text-gray-700 text-base text-justify">
                                Become an expert in Asynchronous JavaScript: Promises, Callbacks, Async Await, Event Loop, etc.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">New</span>
                        </div>
                        <div className="px-6 py-4">
                          <Link to={"/asynchronous-javascript-promises-callbacks-async-await"}>
                                <button  className="bg-orange-800 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">
                                    Check Out
                                </button>
                          </Link>
                        </div>
                    </div>
                    <br />
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200">
                        <img className="w-full" src={card2} alt="Card Image" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">JavaScript - Marathon Interview Questions Series</div>
                            <p className="text-gray-700 text-base text-justify">
                                The Quintessential Guide For Cracking JavaScript Interviews For Developers World-wide
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Featured</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Lowest
                                Price</span>
                        </div>
                        <div className="px-6 py-4">
                            <button onClick={() => navigate("/javascript-marathon-interview-questions-series")} className="bg-orange-800 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">
                                Check Out
                            </button>
                        </div>
                    </div>
                    <br />
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200">
                        <img className="w-full" src={card1} alt="Card Image" />
                        <div className="px-6 py-4 pb-15">
                            <div className="font-bold text-xl mb-2">The Complete JavaScript Course 2025: From Zero to Expert!</div>
                            <p className="text-gray-700 text-base text-justify">
                                The modern JavaScript course for everyone! Master JavaScript with projects, challenges and
                                theory. Many courses in one!
                            </p>
                        </div>
                        <div className="px-6 py-4 mb-8">
                            <button onClick={() => navigate("/the-complete-javascript-course")} className="bg-orange-800 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">
                                Check Out
                            </button>
                        </div>
                    </div>
                    <br />
                </div>
            </section>


            <section id="contact" className='pt-10' >
                <h1 className="flex justify-center p-5 md:pt-15 text-4xl font-bold">Contact</h1>
                <div className="p-10 pb-10 grid grid-row-4 gap-y-10 md:grid-cols-2 md:gap-5 lg:grid-cols-4  md:ps-18">
                    <div className="border rounded p-5 md:w-full">
                        <h1 className="text-2xl font-bold pb-1">Contact Us</h1>
                        <p>We’re here to help! Whether you have questions about a course, need support with your account, or
                            want to become an instructor — feel free to reach out.</p>
                        <h1 className="text-2xl font-semibold pb-1"> Get in Touch</h1>
                        <p>Email: support@learnhub.com <br />
                            Phone: +91 98765 43210 <br />
                            Working Hours: Monday to Saturday, 9:00 AM – 6:00 PM IST</p>
                    </div>

                    <div className="border rounded p-5 md:w-full">
                        <h1 className="text-2xl font-bold pb-1">Send Us a Message</h1>
                        <p>Have a question or feedback? Fill out the form below and our team will get back to you within 24
                            hours.</p>
                        <br />
                        <div className='max-lg:px-2'>
                            <label htmlFor="name">Name</label>
                            <input type="text" className="w-full border ps-5 pt-1 pb-1 rounded" placeholder="Enter yor name" />
                        </div>
                        <br />
                        <div className='max-lg:px-2'>
                            <label htmlFor="name">Email</label>
                            <input type="email" className="w-full ms-1 border ps-5 pt-1 pb-1 rounded" placeholder="Enter yor Email" />
                        </div>
                    </div>

                    <div className="border rounded p-5 md:w-full">
                        <h1 className="text-2xl font-bold pb-1">Our Office</h1>
                        <ul>
                            <li>LearnHub Pvt. Ltd.</li>
                            <li>#21, Innovation Tower</li>
                            <li>Koramangala, Bangalore – 560034</li>
                            <li>India</li>
                        </ul>
                    </div>

                    <div className="border rounded p-5 md:w-full lg:overflow-hidden">
                        <h1 className="text-2xl font-bold pb-1"> Follow Us</h1>
                        <ul className='h-full text-justify'>
                            <li>Facebook: fb.com/learnhub</li>
                            <li>Instagram: @learnhub_official</li>
                            <li>LinkedIn: linkedin.com/company/learnhub</li>
                            <li>Twitter: @learnhub_global
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
             <Footer/>
            <MobileNave />
        </>


    )
}

export default LandingPage