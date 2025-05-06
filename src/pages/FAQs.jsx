import { useState } from 'react';

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="faqs">
      <section className="faqs-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Here you can find answers to some of the most common questions about our foundation and how you can help.</p>
      </section>

      <section className="faqs-list">
        <div className="container">
          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(0)} aria-expanded={activeIndex === 0 ? 'true' : 'false'} aria-controls="answer-0">
              How can I volunteer with The Power of Compassion Foundation?
            </h2>
            {activeIndex === 0 && <p id="answer-0">Contact us through the "Get Involved" page, and we will provide you with opportunities to make a difference.</p>}
          </div>

          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(1)} aria-expanded={activeIndex === 1 ? 'true' : 'false'} aria-controls="answer-1">
              What types of donations do you accept?
            </h2>
            {activeIndex === 1 && <p id="answer-1">We accept both monetary and material donations. Please visit our "Donate" page for more information.</p>}
          </div>

          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(2)} aria-expanded={activeIndex === 2 ? 'true' : 'false'} aria-controls="answer-2">
              How do I know my donation is being used appropriately?
            </h2>
            {activeIndex === 2 && <p id="answer-2">We are committed to transparency. You can find our financial reports on the "Transparency & Reports" page.</p>}
          </div>

          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(3)} aria-expanded={activeIndex === 3 ? 'true' : 'false'} aria-controls="answer-3">
              How can I stay updated on your activities?
            </h2>
            {activeIndex === 3 && <p id="answer-3">Follow us on social media, subscribe to our newsletter, or check out our blog for the latest updates!</p>}
          </div>

          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(4)} aria-expanded={activeIndex === 4 ? 'true' : 'false'} aria-controls="answer-4">
              Can I organize a fundraiser for the foundation?
            </h2>
            {activeIndex === 4 && <p id="answer-4">Absolutely! Reach out to us via the "Get Involved" page for guidance and resources.</p>}
          </div>

          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(5)} aria-expanded={activeIndex === 5 ? 'true' : 'false'} aria-controls="answer-5">
              Do you operate only in Kenya?
            </h2>
            {activeIndex === 5 && <p id="answer-5">Currently, our main focus is in Kenya, but we are open to expanding our reach in the future.</p>}
          </div>

          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(6)} aria-expanded={activeIndex === 6 ? 'true' : 'false'} aria-controls="answer-6">
              Is my donation tax deductible?
            </h2>
            {activeIndex === 6 && <p id="answer-6">Yes, your donation may be tax deductible. Please consult your local tax authority or our finance team for specifics.</p>}
          </div>

          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(7)} aria-expanded={activeIndex === 7 ? 'true' : 'false'} aria-controls="answer-7">
              Can I sponsor a specific program or cause?
            </h2>
            {activeIndex === 7 && <p id="answer-7">Yes! On the "Programs" page, you can choose which cause you’d like to support directly.</p>}
          </div>

          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(8)} aria-expanded={activeIndex === 8 ? 'true' : 'false'} aria-controls="answer-8">
              How do you select the beneficiaries of your programs?
            </h2>
            {activeIndex === 8 && <p id="answer-8">We use a transparent vetting process with the help of local community leaders and volunteers.</p>}
          </div>

          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(9)} aria-expanded={activeIndex === 9 ? 'true' : 'false'} aria-controls="answer-9">
              Are there any age restrictions for volunteers?
            </h2>
            {activeIndex === 9 && <p id="answer-9">Volunteers must be at least 16 years old. Parental consent is required for those under 18.</p>}
          </div>

          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(10)} aria-expanded={activeIndex === 10 ? 'true' : 'false'} aria-controls="answer-10">
              How often do you update your reports?
            </h2>
            {activeIndex === 10 && <p id="answer-10">We publish detailed reports annually and provide quarterly updates on key metrics.</p>}
          </div>

          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(11)} aria-expanded={activeIndex === 11 ? 'true' : 'false'} aria-controls="answer-11">
              Can I visit a program site in person?
            </h2>
            {activeIndex === 11 && <p id="answer-11">Yes, but arrangements must be made in advance. Please contact us to schedule a visit.</p>}
          </div>

          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(12)} aria-expanded={activeIndex === 12 ? 'true' : 'false'} aria-controls="answer-12">
              How long has the foundation been active?
            </h2>
            {activeIndex === 12 && <p id="answer-12">The Power of Compassion Foundation was established in 2025.</p>}
          </div>

          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(13)} aria-expanded={activeIndex === 13 ? 'true' : 'false'} aria-controls="answer-13">
              Can I partner with your foundation as an organization?
            </h2>
            {activeIndex === 13 && <p id="answer-13">We welcome partnerships with like-minded organizations. Please reach out via our Contact page.</p>}
          </div>

          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(14)} aria-expanded={activeIndex === 14 ? 'true' : 'false'} aria-controls="answer-14">
              Do you provide certificates to volunteers?
            </h2>
            {activeIndex === 14 && <p id="answer-14">Yes, volunteers who complete specific programs receive official recognition and certificates.</p>}
          </div>

          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(15)} aria-expanded={activeIndex === 15 ? 'true' : 'false'} aria-controls="answer-15">
              How is the foundation funded?
            </h2>
            {activeIndex === 15 && <p id="answer-15">We are funded through donations, grants, and occasional fundraising events.</p>}
          </div>

          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(16)} aria-expanded={activeIndex === 16 ? 'true' : 'false'} aria-controls="answer-16">
              Do you accept international donations?
            </h2>
            {activeIndex === 16 && <p id="answer-16">Yes, we accept donations from supporters worldwide through our secure online platform.</p>}
          </div>

          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(17)} aria-expanded={activeIndex === 17 ? 'true' : 'false'} aria-controls="answer-17">
              What makes The Power of Compassion Foundation unique?
            </h2>
            {activeIndex === 17 && <p id="answer-17">Our focus on spiritual and emotional support in addition to material aid sets us apart from many other NGOs.</p>}
          </div>

          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(18)} aria-expanded={activeIndex === 18 ? 'true' : 'false'} aria-controls="answer-18">
              Can I donate in honor or memory of someone?
            </h2>
            {activeIndex === 18 && <p id="answer-18">Yes, we offer options to dedicate your donation to a loved one during the checkout process.</p>}
          </div>

          <div className="faq-item">
            <h2 onClick={() => toggleAnswer(19)} aria-expanded={activeIndex === 19 ? 'true' : 'false'} aria-controls="answer-19">
              How do I contact you directly?
            </h2>
            {activeIndex === 19 && <p id="answer-19">Use the contact form on our website or email us directly at compassionfoundation@gmail.com.</p>}
          </div>
        </div>
      </section>
    </main>
  );
}

export default FAQs;
