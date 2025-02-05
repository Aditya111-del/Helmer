import React from 'react';

const FeaturedProject = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="relative rounded-3xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80"
          alt="Exhibition Space"
          className="w-full h-[700px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-16">
          <p className="text-sm text-white/60 mb-4 tracking-wider">HELMER</p>
          <h2 className="text-5xl font-light mb-6">THE PHILOSOPHY OF TECH</h2>
          <p className="max-w-2xl mb-8 text-white/80 leading-relaxed">
            Step into a world where digital artistry meets boundless imagination. 
            Our latest Inovation and Technology project is a testament to the future of design.
          </p>
          <button className="button-outline">
            READ MORE
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;