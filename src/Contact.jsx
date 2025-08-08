import { forwardRef } from "react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = forwardRef((props, ref) => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dc43wgr", "template_y54qyjg", form.current, {
        publicKey: "0as9gs7P5DgjFhJNT",
      })
      .then(
        () => {
          console.log("Message has been sent!");
          setMessageSent(true);
        },
        (error) => {
          console.log("MESSAGE FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contactScroll" className="contact-container" ref={ref}>
      {!messageSent ? (
        <form ref={form} onSubmit={sendEmail}>
          <h1>Contact</h1>
          <hr />
          <h2>
            Feel free to contact me directly by filling in the form below.
            Looking forward to hearing from you. &#9786;
          </h2>

          <div className="form-section">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              className="name"
              type="text"
              placeholder="Marceo Santos"
              name="user_name"
              required
            />
            <br />

            <label htmlFor="email">Email:</label>
            <input
              id="email"
              className="email"
              type="email"
              placeholder="marceokuehn97@gmail.com"
              name="user_email"
              required
            />
            <br />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              className="message"
              placeholder="Enter your message here..."
              rows={6}
              cols={40}
              name="message"
              required
            />
            <br />

            <button type="submit">Send</button>
          </div>
        </form>
      ) : (
        <div
          className="thank-you-message"
          style={{
            display: "flex",
          }}
        >
          <p>
            Thank you for your message. <br />I will respond as soon as
            possible!
          </p>
        </div>
      )}
    </div>
  );
});

export default Contact;
