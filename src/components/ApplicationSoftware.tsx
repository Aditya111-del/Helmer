import { Link } from 'react-router-dom';
import '../index.css';

const ApplicationSoftware = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      {/* Title */}
      <h2 className="text-5xl font-bold text-center mb-20">Application Software</h2>

      {/* Introduction */}
      <p className="text-center text-xl text-white/80 mb-10">
        We develop custom software solutions to streamline your operations, enhance productivity, and drive growth. Whether you need an ERP system, CRM solution, or bespoke software, we’ve got you covered.
      </p>

      

      {/* Application Software Cards Section */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-6">Our Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ERP Systems */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">ERP Systems</h3>
              <p className="text-white/80 mb-6">
                Implement enterprise resource planning systems to manage your business processes efficiently.
              </p>
              <Link to="/contact" className="button-outline">
                Contact Us →
              </Link>
            </div>
          </div>
          {/* CRM Solutions */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">CRM Solutions</h3>
              <p className="text-white/80 mb-6">
                Build customer relationship management systems to improve client interactions and retention.
              </p>
              <Link to="/contact" className="button-outline">
                Contact Us →
              </Link>
            </div>
          </div>
          {/* Custom Software */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Custom Software Development</h3>
              <p className="text-white/80 mb-6">
                Develop bespoke software tailored to meet your unique business requirements.
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
          <li><strong>Customization:</strong> Tailor software to meet your unique business requirements.</li>
          <li><strong>Scalability:</strong> Build solutions that grow with your business.</li>
          <li><strong>Integration:</strong> Seamlessly integrate with existing systems and third-party tools.</li>
          <li><strong>User-Friendly Design:</strong> Intuitive interfaces for maximum usability.</li>
        </ul>
      </div>

      {/* Use Cases */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-6">Use Cases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Manufacturing */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-bold mb-4">Manufacturing</h4>
              <p className="text-white/80 mb-6">
                Optimize production processes and reduce downtime with custom manufacturing software.
              </p>
            </div>
          </div>
          {/* Education */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-bold mb-4">Education</h4>
              <p className="text-white/80 mb-6">
                Streamline administrative tasks and enhance learning experiences with education software.
              </p>
            </div>
          </div>
          {/* Logistics */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-bold mb-4">Logistics</h4>
              <p className="text-white/80 mb-6">
                Improve fleet management and delivery tracking with logistics software.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h3>
        <p className="text-center text-white/80">
          Our team of experts combines deep technical knowledge with a user-centric approach to deliver software that not only meets but exceeds your expectations. We focus on delivering value through innovation and reliability.
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

export default ApplicationSoftware;