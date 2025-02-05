import React from 'react';

const ArtProjects = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-[#041140] p-10 rounded-3xl">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1638186824584-6d6367254927?auto=format&fit=crop&q=80"
              alt="Art Unbound"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-light">UNBOUND ODYSSEY</h3>
            <p className="text-sm text-white/60">PERSONAL PROJECT</p>
          </div>
        </div>
        <div className="bg-[#041140] rounded-3xl flex items-center justify-center p-16">
          <div className="text-center">
            <h2 className="text-4xl font-light mb-8">Organizing a conference?</h2>
            <button className="button-outline">
              CONTACT US
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtProjects;