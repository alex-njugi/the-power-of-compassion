function GetInvolved() {
    return (
      <main className="get-involved">
        <section className="involved-header">
          <h1>Get Involved</h1>
          <p>You can make a difference. Join us in spreading compassion and hope.</p>
        </section>
  
        <section className="involved-options">
          <div className="container">
            <div className="involve-card">
              <h2>Volunteer with Us</h2>
              <p>
                Be part of our visits, events, and outreach programs. Your time and presence can change lives.
              </p>
            </div>
  
            <div className="involve-card">
              <h2>Organize a Drive</h2>
              <p>
                Help us gather food, clothing, or school supplies in your community or school.
              </p>
            </div>
  
            <div className="involve-card">
              <h2>Attend Our Events</h2>
              <p>
                Take part in charity walks, prayer meetings, or fundraisers we organize throughout the year.
              </p>
            </div>
          </div>
        </section>
  
        <section className="involved-contact">
          <div className="container">
            <h2>Ready to Join?</h2>
            <p>Fill out the form below or contact us directly to get started.</p>
            <form className="involve-form" action="https://formspree.io/f/xgvkkpbv" method="POST">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" rows="4" placeholder="How would you like to help?" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
      </main>
    );
  }
  
  export default GetInvolved;
  