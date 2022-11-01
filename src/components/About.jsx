import React from "react";
import styled from "styled-components";
import ME from "../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolder2 } from "react-icons/bs";

const About = () => {
  return (
    <AboutWrapper id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <AboutContainer className="container">
        <AboutMe>
          <AboutMeImg>
            <img src={ME} alt="me" />
          </AboutMeImg>
        </AboutMe>
        <AboutContent>
          <AboutCards>
            <AboutArticle>
              <FaAward />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </AboutArticle>
            <AboutArticle>
              <FiUsers />
              <h5>Clients</h5>
              <small>100+ WorldWide</small>
            </AboutArticle>
            <AboutArticle>
              <BsFolder2 />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </AboutArticle>
          </AboutCards>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            incidunt laborum dolorem porro amet. Aliquid corporis laudantium
            esse nulla quo voluptas! Adipisci quibusdam exercitationem odit
            nulla amet corporis aspernatur repellendus.
          </p>
          <ContactBtn className="btn btn-primary">Let's Talk</ContactBtn>
        </AboutContent>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled.section``;

const AboutContainer = styled.div``;

const AboutMe = styled.div``;

const AboutMeImg = styled.div``;

const AboutContent = styled.div``;

const AboutCards = styled.div``;

const AboutArticle = styled.article``;

const ContactBtn = styled.a``;
