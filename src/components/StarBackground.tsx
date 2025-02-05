import React, { useEffect } from 'react';

const StarBackground = () => {
  useEffect(() => {
    const createStars = () => {
      const container = document.getElementById('star-container');
      if (!container) return;

      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 4}s`;
        container.appendChild(star);
      }
    };

    createStars();
    return () => {
      const container = document.getElementById('star-container');
      if (container) container.innerHTML = '';
    };
  }, []);

  return <div id="star-container" className="absolute inset-0 overflow-hidden" />;
};

export default StarBackground;