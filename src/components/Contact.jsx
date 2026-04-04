// src/components/Contact.jsx
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4hmjrw3",
        "template_hfd06nk",
        form.current,
        "zSpk9y3y74la_SLda"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message, try again.");
          console.log(error.text);
        }
      );
  };

  return (
    
    <section id="contact">
      <div className="container" data-aos="fade-up">
        <h2 className="mb-4">Get In Touch</h2>

        <form ref={form} onSubmit={sendEmail} className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              name="from_name"
              className="form-control bg-dark text-white"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="col-md-6">
            <input
              type="email"
              name="from_email"
              className="form-control bg-dark text-white"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="col-12">
            <textarea
              name="message"
              className="form-control bg-dark text-white"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
    
  );
}