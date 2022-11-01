import React from "react";
import styled from "styled-components";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer className="container">
        <h5>Hello, I'm</h5>
        <h1>Slava Nestertsev</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <Me>
          <img src={ME} alt="me" />
        </Me>

        <ScrollDown href="#contact">Scroll Down</ScrollDown>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    height: 68vh;
  }

  @media screen and (max-width: 600px) {
    height: 100vh;
  }
`;

const HeaderContainer = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
`;

const Me = styled.div`
  background: linear-gradient(var(--color-primary), transparent);
  width: 22rem;
  height: 30rem;
  position: absolute;
  left: calc(50% - 11rem);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  padding: 5rem 1.5rem 1.5rem 1.5rem;
`;

const ScrollDown = styled.a`
  position: absolute;
  right: -2.3rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 0.9rem;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
