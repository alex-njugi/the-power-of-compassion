function Donate() {
    return (
      <main className="donate">
        <section className="donate-hero">
          <h1>Support Our Mission</h1>
          <p>Your donation helps us reach and serve those who need compassion most.</p>
        </section>
  
        <section className="donate-info">
          <div className="container">
            <h2>Where Your Gift Goes</h2>
            <ul>
              <li>Providing food and clothing to the needy</li>
              <li>Organizing prayer and outreach visits</li>
              <li>Supporting education and healthcare initiatives</li>
            </ul>
          </div>
        </section>
  
        <section className="donate-form-section">
          <div className="container">
            <h2>Donate Now</h2>
            <form className="donate-form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="number" placeholder="Amount (KES)" required />
              <select required>
                <option value="">Choose Payment Method</option>
                <option value="mpesa">M-Pesa</option>
                <option value="paypal">PayPal</option>
                <option value="card">Credit/Debit Card</option>
              </select>
              <button type="submit">Proceed to Donate</button>
            </form>
          </div>
        </section>
      </main>
    );
  }
  
  export default Donate;
  