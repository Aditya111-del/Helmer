import { Link } from 'react-router-dom';
import '../index.css';

const Ai = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      {/* Title */}
      <h2 className="text-5xl font-bold text-center mb-20">AI Services</h2>

      {/* Introduction */}
      <p className="text-center text-xl text-white/80 mb-10">
        Harness the power of Artificial Intelligence to automate processes, analyze data, and make smarter decisions. Our AI solutions are designed to drive innovation and efficiency across industries.
      </p>

      {/* AI Cards Section */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-6">Our AI Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Automation */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Automation</h3>
              <p className="text-white/80 mb-6">
                Automate repetitive tasks and streamline workflows using AI-powered tools.
              </p>
              <Link to="/contact" className="button-outline">
                Contact Us →
              </Link>
            </div>
          </div>
          {/* Data Analytics */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Data Analytics</h3>
              <p className="text-white/80 mb-6">
                Unlock insights from your data with advanced analytics and machine learning models.
              </p>
              <Link to="/contact" className="button-outline">
                Contact Us →
              </Link>
            </div>
          </div>
          {/* Chatbots */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Chatbots & Virtual Assistants</h3>
              <p className="text-white/80 mb-6">
                Build intelligent chatbots and virtual assistants to enhance customer support.
              </p>
              <Link to="/contact" className="button-outline">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-6">Key Features</h3>
        <ul className="list-disc list-inside text-white/80 space-y-4">
          <li><strong>Automation:</strong> Streamline repetitive tasks with AI-powered automation tools.</li>
          <li><strong>Data Analytics:</strong> Unlock insights from your data using advanced machine learning models.</li>
          <li><strong>Predictive Modeling:</strong> Forecast trends and outcomes with predictive analytics.</li>
          <li><strong>Natural Language Processing (NLP):</strong> Build intelligent chatbots and virtual assistants for enhanced customer support.</li>
        </ul>
      </div>


      {/* Use Cases */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-6">Use Cases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Healthcare */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-bold mb-4">Healthcare</h4>
              <p className="text-white/80 mb-6">
                AI-driven diagnostics and personalized treatment plans improve patient care and reduce costs.
              </p>
            </div>
          </div>
          {/* Retail */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-bold mb-4">Retail</h4>
              <p className="text-white/80 mb-6">
                Predict customer behavior and optimize inventory management with AI-powered analytics.
              </p>
            </div>
          </div>
          {/* Finance */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-bold mb-4">Finance</h4>
              <p className="text-white/80 mb-6">
                Detect fraud and assess credit risk using AI algorithms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h3>
        <p className="text-center text-white/80">
          With years of experience in AI development, our team combines cutting-edge technology with industry expertise to deliver tailored solutions that meet your business needs. We prioritize transparency, scalability, and innovation.
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

export default Ai;