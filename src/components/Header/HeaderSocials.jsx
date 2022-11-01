import React from "react";
import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <HeaderSocialsClass>
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="https://instagram.com" target="_blank">
        <FaInstagram />
      </a>
    </HeaderSocialsClass>
  );
};

export default HeaderSocials;

const HeaderSocialsClass = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 3rem;

  &::after {
    content: "";
    width: 1px;
    height: 2rem;
    background-color: var(--color-primary);
  }

  @media screen and (max-width: 600px) {
    display: none; 
  }
`;
