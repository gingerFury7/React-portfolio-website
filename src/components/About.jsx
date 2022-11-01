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
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </AboutArticle>
            <AboutArticle>
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ WorldWide</small>
            </AboutArticle>
            <AboutArticle>
              <BsFolder2 className="about__icon" />
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

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    transparent,
    var(--color-primary),
    transparent
  );
  display: grid;
  place-items: center;

  @media screen and (max-width: 1024px) {
    width: 50%;
    margin: 2rem auto 4rem;
  }

  @media screen and (max-width: 600px) {
    width: 65%;
    margin: 0 auto 3rem;
  }
`;

const AboutMeImg = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: var(--transition);

  &:hover {
    transform: rotate(0deg);
  }
`;

const AboutContent = styled.div`
  & p {
    margin: 2rem 0 2.6rem;
    color: var(--color-light);
  }

  @media screen and (max-width: 1024px) {
    & p {
      margin: 1rem 0 1.5rem;
    }
  }

  @media screen and (max-width: 600px) {
    text-align: center;

    & p {
      margin: 1.5rem 0;
    }
  }
`;

const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

const AboutArticle = styled.article`
  background-color: var(--color-bg-variant);
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }

  & h5 {
    font-size: 0.95rem;
  }

  & small {
    font-size: 0.7rem;
    color: var(--color-light);
  }
`;

const ContactBtn = styled.a``;
