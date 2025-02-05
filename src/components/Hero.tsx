import React from 'react';

const Hero = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        {/* Navigation Links */}
       

        {/* Main Title */}
        <h1 className="text-8xl font-light tracking-wide mb-6">HELMER</h1>

        {/* Divider Line */}
        <div className="w-32 h-px bg-white/30 mb-6"></div>

        {/* Subtitle */}
        <p className="text-xl tracking-[0.3em] text-white/90">TECH FOR THE FUTURE</p>
      </div>
    </section>
  );
};

export default Hero;