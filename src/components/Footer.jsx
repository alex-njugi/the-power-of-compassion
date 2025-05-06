import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="para">
        Feel free to reach out to us on our <br></br>
        media platforms.
      </div>

      <div className="footer-social">
        <a href="mailto:info@thepowerofcompassion.com" target="_blank" aria-label="Email">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg" alt="Email" width="24" height="auto" />
        </a>

        <a href="https://wa.me/254700000000" target="_blank" aria-label="WhatsApp">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="24" height="24" />
        </a>

        <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" width="24" height="24" />
        </a>
      </div>


      <div className="footer-newsletter">
        <form action="https://formspree.io/f/xjkwwrok" method="POST">
          <input 
            type="email" 
            name="email" 
            placeholder="Subscribe to our newsletter" 
            required />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="footer-copyright">
        <p>&copy; 2025 The Power of Compassion Foundation. All rights reserved.</p>
        <p><small>Disclaimer: We ensure full transparency and accountability in all our operations.</small></p>
      </div>
    </footer>
  );
}

export default Footer;
