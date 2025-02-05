import { Link } from 'react-router-dom';
import '../index.css';

const Blockchain = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      {/* Title */}
      <h2 className="text-5xl font-bold text-center mb-20">Blockchain Services</h2>

      {/* Introduction */}
      <p className="text-center text-xl text-white/80 mb-10">
        Leverage blockchain technology for secure, transparent, and decentralized solutions. From smart contracts to supply chain management, we help businesses unlock the full potential of blockchain.
      </p>

     
      

      {/* Blockchain Cards Section */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-6">Block-Chain Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Smart Contracts */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Smart Contracts</h3>
              <p className="text-white/80 mb-6">
                Automate agreements and transactions using self-executing smart contracts.
              </p>
              <Link to="/contact" className="button-outline">
                Contact Us →
              </Link>
            </div>
          </div>
          {/* Decentralized Apps */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Decentralized Applications (DApps)</h3>
              <p className="text-white/80 mb-6">
                Build decentralized applications that run on blockchain networks.
              </p>
              <Link to="/contact" className="button-outline">
                Contact Us →
              </Link>
            </div>
          </div>
          {/* Supply Chain */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Supply Chain Solutions</h3>
              <p className="text-white/80 mb-6">
                Enhance transparency and traceability in your supply chain using blockchain.
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
          <li><strong>Decentralization:</strong> Eliminate intermediaries and reduce costs.</li>
          <li><strong>Transparency:</strong> Ensure data integrity and traceability.</li>
          <li><strong>Security:</strong> Protect sensitive information with cryptographic techniques.</li>
          <li><strong>Smart Contracts:</strong> Automate agreements and transactions without human intervention.</li>
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
                Securely store and share patient records using blockchain technology.
              </p>
            </div>
          </div>
          {/* Real Estate */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-bold mb-4">Real Estate</h4>
              <p className="text-white/80 mb-6">
                Simplify property transactions and ownership transfers with blockchain.
              </p>
            </div>
          </div>
          {/* Voting Systems */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-bold mb-4">Voting Systems</h4>
              <p className="text-white/80 mb-6">
                Ensure secure and transparent elections with blockchain-based voting systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h3>
        <p className="text-center text-white/80">
          Our blockchain experts have extensive experience in designing and implementing secure, scalable, and innovative blockchain solutions. We work closely with you to ensure the solution aligns with your business goals.
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

export default Blockchain;