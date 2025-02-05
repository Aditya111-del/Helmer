import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          {/* Navigation Links */}
          <div className="flex space-x-12 items-center">
            <a href="/" className="text-sm tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300">HOME</a>
            <a href="/about" className="text-sm tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300">ABOUT</a>

            {/* Image placed here */}
            <div className="mx-8"> {/* Add margin to create space */}
            <img
  src="assets\images\logo.png" // Assuming the image is in the public/images directory
  alt="Logo"
  className="w-12 h-12"
/>
            </div>

            <a href="/Services" className="text-sm tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300">SERVICE</a>
            <a href="/Contact" className="text-sm tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300">CONTACTS</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;