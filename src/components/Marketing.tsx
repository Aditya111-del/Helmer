import { Link } from 'react-router-dom';
import '../index.css';

const MarketingAgency = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      {/* Title */}
      <h2 className="text-5xl font-bold text-center mb-20">Marketing Agency</h2>

      {/* Introduction */}
      <p className="text-center text-xl text-white/80 mb-10">
        Elevate your brand with our digital marketing expertise. From SEO and social media campaigns to content creation and analytics, we help you reach your target audience effectively.
      </p>

    

      {/* Service Cards Section */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-6">Our Marketing Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* SEO */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">SEO Optimization</h3>
              <p className="text-white/80 mb-6">
                Boost your website's ranking on search engines with keyword research, on-page optimization, and link-building strategies.
              </p>
              <Link to="/contact" className="button-outline">
                Contact Us →
              </Link>
            </div>
          </div>
          {/* Social Media */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Social Media Management</h3>
              <p className="text-white/80 mb-6">
                Grow your brand's presence on social media with engaging content, targeted ads, and community management.
              </p>
              <Link to="/contact" className="button-outline">
                Contact Us →
              </Link>
            </div>
          </div>
          {/* Content Creation */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Content Creation</h3>
              <p className="text-white/80 mb-6">
                Create high-quality blogs, videos, infographics, and other content to engage your audience and drive conversions.
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
          <li><strong>SEO Optimization:</strong> Improve your website's visibility on search engines.</li>
          <li><strong>Social Media Management:</strong> Build and engage your audience across platforms like Facebook, Instagram, and LinkedIn.</li>
          <li><strong>Content Creation:</strong> Craft compelling blogs, videos, and graphics to tell your brand's story.</li>
          <li><strong>Data Analytics:</strong> Track campaign performance and optimize strategies using data-driven insights.</li>
        </ul>
      </div>

      {/* Use Cases */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-6">Use Cases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* E-commerce */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-bold mb-4">E-commerce</h4>
              <p className="text-white/80 mb-6">
                Drive traffic and sales for your online store with targeted marketing campaigns.
              </p>
            </div>
          </div>
          {/* Startups */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-bold mb-4">Startups</h4>
              <p className="text-white/80 mb-6">
                Build brand awareness and attract investors with strategic marketing efforts.
              </p>
            </div>
          </div>
          {/* Local Businesses */}
          <div className="card-container">
            <div className="card bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-bold mb-4">Local Businesses</h4>
              <p className="text-white/80 mb-6">
                Reach local customers through geo-targeted ads and community engagement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h3>
        <p className="text-center text-white/80">
          Our team of marketing experts combines creativity with data-driven strategies to deliver measurable results. We focus on building long-term relationships with our clients and helping them achieve their business goals.
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

export default MarketingAgency;