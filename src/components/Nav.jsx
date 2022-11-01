import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBookAlt, BiMessageAltMinus } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about ">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <BiBookAlt />
      </a>
      <a href="#services">
        <RiServiceLine  />
      </a>
      <a href="#contact">
        <BiMessageAltMinus />
      </a>
    </nav>
  );
};

export default Nav;
