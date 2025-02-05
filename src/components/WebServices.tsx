import { Link } from 'react-router-dom';
import '../index.css';

const WebServices = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      {/* Title */}
      <h2 className="text-5xl font-bold text-center mb-20">Web Services</h2>

      {/* Introduction */}
      <p className="text-center text-xl text-white/80 mb-10">
        We build modern, responsive, and scalable web applications tailored to your business needs. Whether you need a custom web app, a Progressive Web App (PWA), or an e-commerce platform, we’ve got you covered.
      </p>

      

      {/* Web Services Cards Section */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-6">Our Web Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web App Development */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Web Application Development</h3>
              <p className="text-white/80 mb-6">
                Our team of experts will work with you to develop a custom web application that meets your specific requirements.
              </p>
              <Link to="/contact" className="button-outline">
                Contact Us →
              </Link>
            </div>
          </div>
          {/* PWA */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Progressive Web Apps (PWA)</h3>
              <p className="text-white/80 mb-6">
                Develop fast, reliable, and engaging web applications that offer native app-like experiences.
              </p>
              <Link to="/contact" className="button-outline">
                Contact Us →
              </Link>
            </div>
          </div>
          {/* E-commerce */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">E-commerce Solutions</h3>
              <p className="text-white/80 mb-6">
                Create online stores that are secure, user-friendly, and optimized for conversions.
              </p>
              <Link to="/contact" className="button-outline">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-6">Key Features</h3>
        <ul className="list-disc list-inside text-white/80 space-y-4">
          <li><strong>Customization:</strong> Tailor web solutions to meet your unique business requirements.</li>
          <li><strong>Responsive Design:</strong> Ensure seamless user experiences across all devices.</li>
          <li><strong>Scalability:</strong> Build solutions that grow with your business.</li>
          <li><strong>Performance Optimization:</strong> Deliver fast-loading and reliable web applications.</li>
        </ul>
      </div>

      {/* Use Cases */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-6">Use Cases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-bold mb-4">Education</h4>
              <p className="text-white/80 mb-6">
                Build interactive learning platforms and student management systems for educational institutions.
              </p>
            </div>
          </div>
          {/* Retail */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-bold mb-4">Retail</h4>
              <p className="text-white/80 mb-6">
                Create seamless shopping experiences with intuitive e-commerce platforms and PWAs.
              </p>
            </div>
          </div>
          {/* Healthcare */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-bold mb-4">Healthcare</h4>
              <p className="text-white/80 mb-6">
                Develop patient portals and telemedicine platforms to improve healthcare accessibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h3>
        <p className="text-center text-white/80">
          With years of experience in web development, our team combines cutting-edge technology with a user-centric approach to deliver web solutions that drive results. We prioritize performance, security, and scalability.
        </p>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center">
        <Link to="/contact" className="button-outline">
          Contact Us →
        </Link>
      </div>
    </section>
  );
};

export default WebServices;