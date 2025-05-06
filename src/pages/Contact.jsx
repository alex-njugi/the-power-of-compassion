function Contact() {
    return (
      <main className="contact">
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you. Whether you have a question, want to get involved, or need assistance—reach out anytime.</p>
        </section>
  
        <section className="contact-details">
          <div className="container">
            <div className="contact-info">
              <h2>Our Contact Info</h2>
              <p>Email: compassionfoundation@gmail.com</p>
              <p>Phone: +254 712 345 678</p>
              <p>Location: Nairobi, Kenya</p>
            </div>
  
            <div className="contact-form">
              <h2>Send a Message</h2>
              <form action="https://formspree.io/f/xnnddoyg" method="POST">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  export default Contact;
  