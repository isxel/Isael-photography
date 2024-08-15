import React, { useState } from "react";
import "./../styles/Contact.css";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={toggleFAQ}>
        {question}
        <span className="faq-icon">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
}

function Contact() {
  const [contactMethod, setContactMethod] = useState("");
  const [contactValue, setContactValue] = useState("");

  const handleContactChange = (e) => {
    setContactMethod(e.target.value);
    setContactValue(""); // Clear the input when the method changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with:", {
      name: e.target.name.value,
      car: e.target.car.value,
      contactMethod,
      contactValue,
    });
  };

  return (
    <div className="contact-page-container">
      <h1 className="contact-page-title">Contact</h1>

      <p className="contact-page-description">
        If you’d like to reach out directly, feel free to email me at{" "}
        <a href="mailto:driveisxshoot@gmail.com" className="contact-page-email">
          driveisxshoot@gmail.com
        </a>{" "}
        or DM me on Instagram at{" "}
        <a
          href="https://www.instagram.com/driveisx"
          className="contact-page-instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          @driveisx
        </a>
        .
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="car">Car:</label>
          <input type="text" id="car" name="car" required />
        </div>

        <div className="form-group">
          <label htmlFor="contactMethod">Preferred Way of Contact:</label>
          <select
            id="contactMethod"
            value={contactMethod}
            onChange={handleContactChange}
            required
          >
            <option value="">Select one</option>
            <option value="instagram">Instagram</option>
            <option value="phone">Phone Number</option>
            <option value="email">Email</option>
          </select>
        </div>

        {contactMethod && (
          <div className="form-group">
            <label htmlFor="contactValue">
              {contactMethod === "instagram"
                ? "Instagram Handle:"
                : contactMethod === "phone"
                ? "Phone Number:"
                : "Email:"}
            </label>
            <input
              type="text"
              id="contactValue"
              name="contactValue"
              value={contactValue}
              onChange={(e) => setContactValue(e.target.value)}
              required
            />
          </div>
        )}

        <button type="submit" className="contact-form-submit">
          Submit
        </button>
      </form>

      <h2 className="faq-section-title">FAQ</h2>
      <div className="faq-section">
        <FAQItem
          question="How much do you charge for a photoshoot?  "
          answer="My photoshoots are completely free, but I'm open to tips if you feel inclined!"
        />
        <FAQItem
          question="Where do you shoot photos?"
          answer="I shoot in the Austin area, primarily located in the northern Austin area."
        />
        <FAQItem
          question="Can I request specific shots or locations?"
          answer="Yes, I'm open to your ideas! Feel free to share any specific shots or locations you have in mind, and I'll do my best to accommodate them."
        />
      </div>
    </div>
  );
}

export default Contact;
