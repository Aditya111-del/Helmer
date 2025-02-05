import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="p-6 text-center">
      <div className="flex justify-center gap-8">
        <Link to="/" className="nav-link">Home</Link>
        {/* Add other links as needed */}
      </div>
      <p className="text-sm text-white/60 mt-4">&copy; 2025 HELMER. All rights reserved.</p>
    </footer>
  );
};

export default Footer;