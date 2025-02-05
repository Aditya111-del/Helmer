import React, { useState } from 'react';

const Contact = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubscribed(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-[#0F172A] text-white">
      {/* Left Side: Subscription Form */}
      <div className="w-1/2 pr-8">
        <h2 className="text-4xl font-bold mb-6">Subscribe to Our Daily Letters</h2>
        {subscribed ? (
          <div className="text-green-400 text-2xl font-semibold">
            Thank you for subscribing!
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-[#1E293B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>

      {/* Right Side: Solar System Animation */}
      <div className="w-1/2 pl-8 relative">
        <div className="solar-system">
          <div className="sun"></div>
          {['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'].map((planet, index) => (
            <div
              key={planet}
              className={`planet ${planet}`}
              style={{ '--distance': `${(index + 1) * 50}px` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;