import React, { useRef } from "react";
import styled from "styled-components";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5sk3e0o",
        "template_g533gjq",
        form.current,
        "OJENSqLL1MSqI7wvN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <ContactContainer className="container">
        <ContactOptions>
          <ContactOptionsItem>
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>slavka2000@mail.ru</h5>
            <a href="mailto:slavka2000@mail.ru" target="_blank">
              Send a message
            </a>
          </ContactOptionsItem>
          <ContactOptionsItem>
            <FaTelegramPlane className="contact__option-icon" />
            <h4>TG</h4>
            <h5>@gingerFury7</h5>
            <a href="https://t.me/gingerfury7" target="_blank">
              Send a message
            </a>
          </ContactOptionsItem>
          <ContactOptionsItem>
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+123456</h5>
            <a href="https://api.whatsapp.com/send?phone=+123456">
              Send a message
            </a>
          </ContactOptionsItem>
        </ContactOptions>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <ContactFormInput
            name="from_name"
            type="text"
            placeholder="Your Full Name"
            required
          />
          <ContactFormInput
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
          <ContactFromTxtArea
            name="data"
            rows="7"
            placeholder="Your Message"
            required
          ></ContactFromTxtArea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </ContactForm>
      </ContactContainer>
    </section>
  );
};

export default Contact;

const ContactContainer = styled.div`
  width: 58%;
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media screen and (max-width: 600px) {
    width: var(--container-width-sm);
  }
`;

const ContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ContactOptionsItem = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
  }

  & a {
    margin-top: 0.7rem;
    display: inline-block;
    font-size: 0.8rem;
  }

  & h5 {
    color: var(--color-light);
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ContactFormInput = styled.input`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid var(--color-primary-variant);
  resize: none;
  color: var(--color-white);
`;

const ContactFromTxtArea = styled.textarea`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid var(--color-primary-variant);
  resize: none;
  color: var(--color-white);
`;
