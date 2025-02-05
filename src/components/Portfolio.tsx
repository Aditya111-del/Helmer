import React from 'react';

const projects = [
  {
    id: '01',
    title: 'STUDIO 74',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80',
  },
  {
    id: '02',
    title: 'GENESIS',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80',
  },
  {
    id: '03',
    title: 'LINES VOL 1',
    image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80',
  },
  {
    id: '04',
    title: 'CORE 2.0',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80',
  },
];

const Portfolio = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-4 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="portfolio-card transition-transform duration-300 group-hover:scale-95">
              <div className="aspect-square relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <p className="text-sm text-white/60 mb-2">{project.id}</p>
                  <h3 className="text-lg font-medium">{project.title}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;