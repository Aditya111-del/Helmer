import React from 'react';

const projects = [
  {
    title: "SERVICES",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80"
  },
  {
    title: "QUANTUM",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80"
  },
  {
    title: "SPACE TECH",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80"
  },
  {
    title: "FINANCE",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80"
  },
];

const ProjectGrid = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#041140] p-4 rounded-xl">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-center text-sm">{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;