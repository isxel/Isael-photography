/**
 * Contact page
 * Renders entire contact page content
 * Contains a form for users to submit inquiries
 * Also contains a FAQ section
 *
 * @returns Contact component
 */
import React, { useState } from "react";
import emailjs from "emailjs-com";
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

  /**
   * Handle the change of the contact method
   * if the method changes, clear the input
   */
  const handleContactChange = (e) => {
    setContactMethod(e.target.value);
    setContactValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /**
     * Template parameters for the email
     */
    const templateParams = {
      from_name: e.target.name.value,
      car: e.target.car.value,
      contactMethod: contactValue,
    };

    /**
     * Send email using EmailJS
     */
    emailjs
      .send(
        "service_8r4fi2d",
        "template_fhrj49v",
        templateParams,
        "7Znma6wYGBNa-YkUP"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.error("FAILED...", err);
        }
      );
  };

  /**
   * Return the contact page content
   */
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
