import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          {/* Navigation Links */}
          <div className="flex space-x-12 items-center">
            <Link to="/" className="text-sm tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300">HOME</Link>
            <Link to="/about" className="text-sm tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300">ABOUT</Link>

            {/* Image placed here */}
            <div className="mx-8"> {/* Add margin to create space */}
            <img
  src="https://res.cloudinary.com/dbluj8fpu/image/upload/v1738782951/Helmer/okuifnbdwuxw8em3ia2w.png" // Assuming the image is in the public/images directory
  alt="Logo"
  className="w-12 h-12"
/>
            </div>

            <Link to="/Services" className="text-sm tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300">SERVICE</Link>
            <Link to="/Contact" className="text-sm tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300">CONTACTS</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;