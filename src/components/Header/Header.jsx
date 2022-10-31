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
`;

const HeaderContainer = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
`;

const Me = styled.div`
  background-color: var(--color-primary);
  
`;

const ScrollDown = styled.a``;
