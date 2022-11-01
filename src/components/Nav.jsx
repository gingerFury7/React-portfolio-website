import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBookAlt, BiMessageAltMinus } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import styled from "styled-components";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <NavWrapper>
      <NavEl
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active-nav-item" : ""}
      >
        <AiOutlineHome />
      </NavEl>
      <NavEl
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active-nav-item" : ""}
      >
        <AiOutlineUser />
      </NavEl>
      <NavEl
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active-nav-item" : ""}
      >
        <BiBookAlt />
      </NavEl>
      <NavEl
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active-nav-item" : ""}
      >
        <RiServiceLine />
      </NavEl>
      <NavEl
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active-nav-item" : ""}
      >
        <BiMessageAltMinus />
      </NavEl>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  background-color: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);
`;

const NavEl = styled.a`
  background: transparent;
  padding: 0.9rem;
  border-radius: 50%;
  display: flex;
  color: var(--color-light);
  font-size: 1.1rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .active {
    background-color: var(--color-bg);
    color: var(--color-white);
  }
`;
