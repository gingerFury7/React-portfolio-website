import React from "react";
import styled from "styled-components";
import { FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo href="#">DAARK</FooterLogo>
      <Permalinks>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </Permalinks>
      <FooterSocials>
        <a href="https://t.me/gingerfury7">
          <FaTelegramPlane />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </FooterSocials>
      <FooterCopyright>
        <small>&copy; GingerFury7 Portfolio Website. All rights reserved</small>
      </FooterCopyright>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background: var(--color-primary);
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 7rem;

  & a {
    color: var(--color-bg);
  }
`;

const FooterLogo = styled.a`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  display: inline-block;
`;

const Permalinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto 3rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;

  & a {
    background: var(--color-bg);
    color: var(--color-white);
    padding: 0.8rem;
    border-radius: 0.7rem;
    display: flex;
    border: 1px solid transparent;
    transition: var(--transition);
  }

  & a:hover {
    background: transparent;
    border-color: var(--color-bg);
    color: var(--color-bg);
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 2.6rem;
  }
`;

const FooterCopyright = styled.div`
  margin-bottom: 4rem;
  color: var(--color-bg);
`;
