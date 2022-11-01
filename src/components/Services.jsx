import React from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <ServicesContainer className="contaienr">
        <ServiceArticle>
          <ServiceHead>
            <h3>UI/UX Design</h3>
            <SerivceList>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </SerivceList>
          </ServiceHead>
        </ServiceArticle>
        <ServiceArticle>
          <ServiceHead>
            <h3>Web Development</h3>
            <SerivceList>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </SerivceList>
          </ServiceHead>
        </ServiceArticle>
        <ServiceArticle>
          <ServiceHead>
            <h3>Content Creation</h3>
            <SerivceList>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiOutlineCheck className="service__list-icon " />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </SerivceList>
          </ServiceHead>
        </ServiceArticle>
      </ServicesContainer>
    </section>
  );
};

export default Services;

const ServicesContainer = styled.div``;

const ServiceArticle = styled.div``;

const ServiceHead = styled.div``;

const SerivceList = styled.ul``;
