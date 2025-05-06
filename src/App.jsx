import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route for navigation
import Navbar from './components/Navbar';  // Navbar component
import Footer from './components/Footer';  // Footer component
import Home from './pages/Home';  // Home page component
import About from './pages/About';  // About page component
import Programs from './pages/Programs';  // Programs page component
import GetInvolved from './pages/GetInvolved';  // Get Involved page component
import Donate from './pages/Donate';  // Donate page component
import FAQs from './pages/FAQs';  // FAQs page component
import Contact from './pages/Contact';  // Contact page component

function App() {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar />

      {/* Main content area */}
      <main>
        <Routes>
          {/* Set Home route to '/' */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
