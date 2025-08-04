import React from 'react'

function Footer() {
    return (
        <>
            <footer className="footer py-4 mb-20 md:mb-0 bg-gray-200">
                <h1 className="flex justify-center font-bold">VISIT US</h1>
                <div className="text-center mt-3">
                   <button className='cursor-pointer'> <i className="p-2 fa-brands fa-facebook fa-2x"></i></button>
                    <i className="p-2 fa-brands fa-instagram fa-2x"></i>
                    <i className="p-2 fa-brands fa-twitter fa-2x"></i>
                    <i className="p-2 fa-solid fa-envelope fa-2x"></i>
                    <i className="p-2 fa-brands fa-whatsapp fa-2x "></i>
                    <p className="reserved my-2">&copy; 2025 Luminar . All rights reserved.</p>
                    <div id="arrowUp">
                        <a href="#home"><i className="fa-solid fa-arrow-up"></i></a>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer