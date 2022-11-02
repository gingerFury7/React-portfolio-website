import React from "react";
import styled from "styled-components";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <ContactContainer className="container">
        <ContactOptions>
          <ContactOptionsItem>
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>slavka2000@mail.ru</h5>
            <a href="mailto:slavka2000@mail.ru" target="_blank">
              Send a message
            </a>
          </ContactOptionsItem>
          <ContactOptionsItem>
            <FaTelegramPlane />
            <h4>TG</h4>
            <h5>@gingerFury7</h5>
            <a href="https://t.me/gingerfury7" target="_blank">
              Send a message
            </a>
          </ContactOptionsItem>
          <ContactOptionsItem>
            <AiOutlineWhatsApp />
            <h4>WhatsApp</h4>
            <h5>+123456</h5>
            <a href="https://api.whatsapp.com/send?phone=+123456">
              Send a message
            </a>
          </ContactOptionsItem>
        </ContactOptions>
        <ContactForm>
          <input
            name="name"
            type="text"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </ContactForm>
      </ContactContainer>
    </section>
  );
};

export default Contact;

const ContactContainer = styled.div``;

const ContactOptions = styled.div``;

const ContactOptionsItem = styled.article``;

const ContactForm = styled.form``;
