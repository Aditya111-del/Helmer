import { Link } from 'react-router-dom'; // Import Link for routing
import '../index.css'; // Import your custom CSS styles

const About = () => {

  return (
    <section className="container mx-auto px-4 py-20">
      {/* Title */}
      <h2 className="text-5xl font-bold text-center mb-20">STUDIO</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1: SERVICES */}
        <div className="card-container">
          <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 min-h-[300px] flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-4">SERVICES</h3>
            <p className="text-white/80 mb-6">
              A modern approach to closing the gap between design and technology.
            </p>
            {/* Explore Button with Link to Services */}
            <Link to="/services" className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 hover:bg-white/20 hover:text-white transition-all duration-300">
              Explore 
            </Link>
          </div>
        </div>

        {/* Card 2: Shloak */}
        <div className="card-container">
          <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 min-h-[300px] flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-4">SHLOAK</h3>
            <p className="text-white/80 mb-6">
              With our revolutionary beats and Sound Science, we present you Shloak, a music company.
            </p>
            {/* Explore Button with Link to Service */}
            <Link to="/services/shloak" className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 hover:bg-white/20 hover:text-white transition-all duration-300">
              Explore
            </Link>
          </div>
        </div>

        {/* Card 3: LINEA VOL.1 */}
        <div className="card-container">
          <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 min-h-[300px] flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-4">AV-CORE</h3>
            <p className="text-white/80 mb-6">
              A new era of linear design and minimalist aesthetics.
            </p>
            {/* Explore Button with Link to Service */}
            <Link to="/services/linea-vol1" className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 hover:bg-white/20 hover:text-white transition-all duration-300">
              Explore
            </Link>
          </div>
        </div>

        {/* Card 4: FINANCE */}
        <div className="card-container">
          <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 min-h-[300px] flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-4">QUANT FINANCE</h3>
            <p className="text-white/80 mb-6">
              Pioneering the future of design and technology.
            </p>
            {/* Explore Button with Link to Service */}
            <Link to="/services/finance" className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 hover:bg-white/20 hover:text-white transition-all duration-300">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
