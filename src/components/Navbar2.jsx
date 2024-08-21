import React from 'react'
import { Link } from 'react-router-dom';


const Navbar2 = () => {
    function toggleMenu() {
        const menu = document.getElementById("mobile-menu");
        menu.classList.toggle("hidden");
      }
    return (
        <nav className="p-4 bg-white opacity-100 shadow sticky top-0 z-20">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-extrabold">StyleUp</div>
                <div className="hidden md:flex space-x-4">
                    <Link to="/" >Home</Link>
                    <Link to="/" >About</Link>
                    <Link to="/" >Services</Link>
                    <Link href="/" >Contact</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        ☰
                    </button>
                </div>
            </div>
            <div id="mobile-menu" className="md:hidden">
                <Link to="/" className="block py-2">Home</Link>
                <Link to="/" className="block py-2">About</Link>
                <Link to="/" className="block py-2">Services</Link>
                <Link to="/" className="block py-2">Contact</Link>
            </div>
        </nav>

    )
}

export default Navbar2