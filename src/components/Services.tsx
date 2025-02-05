import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../index.css';

const Services = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Title Section */}
      <section className="container mx-auto px-4 py-20 mt-20">
        <h2 className="text-5xl font-bold text-center mb-10">OUR SERVICES</h2>
        <p className="text-center text-xl text-white/80 mb-20 max-w-2xl mx-auto">
          We offer a wide range of services tailored to meet your business needs. From web development to AI solutions, blockchain technology, custom software, and marketing strategies, we’ve got you covered.
        </p>
        {/* Service Cards - Zigzag Layout */}
        <div className="relative">
          {/* Row 1: Two Cards */}
          <div className="flex justify-between items-center mb-16">
            {/* Left Card */}
            <div className="card-container group w-[45%]">
              <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-[1.03] min-h-[300px] flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-center">WEB SERVICES</h3>
                  <p className="text-white/80 text-center mb-6">
                    We build modern, responsive, and scalable web applications tailored to your business needs.
                  </p>
                </div>
                <Link
                  to="/web-services"
                  className="button-outline w-full text-center py-3 px-6 rounded-md transition-all duration-300 hover:bg-white/10"
                >
                  Explore 
                </Link>
              </div>
            </div>
            {/* Right Card */}
            <div className="card-container group w-[45%]">
              <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-[1.03] min-h-[300px] flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-center">AI</h3>
                  <p className="text-white/80 text-center mb-6">
                    Harness the power of Artificial Intelligence to automate processes, analyze data, and make smarter decisions.
                  </p>
                </div>
                <Link
                  to="/ai"
                  className="button-outline w-full text-center py-3 px-6 rounded-md transition-all duration-300 hover:bg-white/10"
                >
                  Explore 
                </Link>
              </div>
            </div>
          </div>
          {/* Row 2: Center Card */}
          <div className="flex justify-center mb-16">
            <div className="card-container group w-[45%]">
              <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-[1.03] min-h-[300px] flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-center">APPLICATION SOFTWARE</h3>
                  <p className="text-white/80 text-center mb-6">
                    We develop custom software solutions to streamline your operations and enhance productivity.
                  </p>
                </div>
                <Link
                  to="/application-software"
                  className="button-outline w-full text-center py-3 px-6 rounded-md transition-all duration-300 hover:bg-white/10"
                >
                  Explore 
                </Link>
              </div>
            </div>
          </div>
          {/* Row 3: Two Cards */}
          <div className="flex justify-between items-center">
            {/* Left Card */}
            <div className="card-container group w-[45%]">
              <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-[1.03] min-h-[300px] flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-center">BLOCKCHAIN</h3>
                  <p className="text-white/80 text-center mb-6">
                    Leverage blockchain technology for secure, transparent, and decentralized solutions.
                  </p>
                </div>
                <Link
                  to="/blockchain"
                  className="button-outline w-full text-center py-3 px-6 rounded-md transition-all duration-300 hover:bg-white/10"
                >
                  Explore 
                </Link>
              </div>
            </div>
            {/* Right Card */}
            <div className="card-container group w-[45%]">
              <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-[1.03] min-h-[300px] flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-center">MARKETING AGENCY</h3>
                  <p className="text-white/80 text-center mb-6">
                    Elevate your brand with our digital marketing expertise. From SEO and social media campaigns to content creation and analytics, we help you reach your target audience effectively.
                  </p>
                </div>
                <Link
                  to="/marketing"
                  className="button-outline w-full text-center py-3 px-6 rounded-md transition-all duration-300 hover:bg-white/10"
                >
                  Explore 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-bold text-center mb-10">Why Choose Us?</h2>
        <p className="text-center text-xl text-white/80 mb-20 max-w-2xl mx-auto">
          Our team combines technical expertise with a deep understanding of your industry. We deliver innovative, scalable, and reliable solutions that drive results. Whether you need a website, AI-powered tools, or a full-fledged marketing strategy, we’re here to help.
        </p>
      </section>
      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-center mb-6">Ready to Get Started?</h2>
        <p className="text-center text-xl text-white/80 mb-10">
          Let us help you achieve your business goals with our cutting-edge services.
        </p>
        <div className="flex justify-center">
          <Link
            to="/contact"
            className="button-outline w-full sm:w-auto px-8 py-3 rounded-md transition-all duration-300 hover:bg-white/10"
          >
            Contact Us →
          </Link>
        </div>
      </section>
      {/* sample change  */}
    </div>
  );
};

export default Services;