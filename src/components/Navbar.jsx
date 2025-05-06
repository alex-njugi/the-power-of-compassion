import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          The Power of Compassion
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav>
          <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/programs" onClick={toggleMenu}>Programs</Link></li>
            <li><Link to="/get-involved" onClick={toggleMenu}>Get Involved</Link></li>
            <li><Link to="/donate" onClick={toggleMenu}>Donate</Link></li>
            <li><Link to="/faqs" onClick={toggleMenu}>FAQs</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
