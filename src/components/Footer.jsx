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
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Testimonials</a>
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

const FooterWrapper = styled.footer``;

const FooterLogo = styled.a``;

const Permalinks = styled.ul``;

const FooterSocials = styled.div``;

const FooterCopyright = styled.div``;
