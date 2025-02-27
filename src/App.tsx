import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import FeaturedProject from './components/FeaturedProject';
import ArtProjects from './components/ArtProjects';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import WebServices from './components/WebServices';
import Ai from './components/Ai'; // Import AI page
import ApplicationSoftware from './components/ApplicationSoftware'; // Import Application Software page
import Blockchain from './components/Blockchain'; // Import Blockchain page
import Marketing from './components/Marketing'; // Import Marketing Agency page

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#020817] text-white relative overflow-hidden">
        {/* Background Effects */}
        <StarBackground />

        {/* Main Content */}
        <div className="relative z-10">
          {/* Navbar */}
          <Navbar />

          {/* Routes */}
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <main className="pt-24 space-y-32">
                  <Hero />
                  <Portfolio />
                  <FeaturedProject />
                  <ArtProjects />
                </main>
              }
            />

            {/* Other Pages */}
            {/* hjghjgjhgh */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/web-services" element={<WebServices />} />
            <Route path="/ai" element={<Ai />} />
            <Route path="/application-software" element={<ApplicationSoftware />} />
            <Route path="/blockchain" element={<Blockchain />} />
            <Route path="/marketing" element={<Marketing />} /> {/* Add Marketing Agency route */}
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;