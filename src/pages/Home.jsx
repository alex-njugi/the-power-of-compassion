function Home() {
    return (
      <main className="home">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to The Power of Compassion</h1>
            <p>
              "Whatsoever you do to the least of my brothers and sisters, that you do unto me." (Matthew 25:40)
            </p>
            <div className="hero-buttons">
              <Link to="/get-involved" className="btn">Join Us</Link>
              <Link to="/donate" className="btn btn-secondary">Donate Now</Link>
            </div>
          </div>
        </section>
  
        {/* Mission Section */}
        <section className="mission">
          <div className="container">
            <h2>Our Mission</h2>
            <p>
              To bring together compassionate youth dedicated to serving the needy through visits,<br></br>prayers and practical support.
            </p>
          </div>
        </section>
      </main>
    );
  }
  
  export default Home;
  