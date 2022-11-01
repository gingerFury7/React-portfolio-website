import React from "react";
import styled from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Experience = () => {
  return (
    <ExperienceWrapper id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <ExperienceContainer>
        <ExpFront>
          <h3>Frontend Development</h3>
          <ExpContent>
            <ExpDetails>
              <AiOutlineCheckCircle />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </ExpDetails>
            <ExpDetails>
              <AiOutlineCheckCircle />
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </ExpDetails>
            <ExpDetails>
              <AiOutlineCheckCircle />
              <h4>TypeScript</h4>
              <small className="text-light">Intermediate</small>
            </ExpDetails>
            <ExpDetails>
              <AiOutlineCheckCircle />
              <h4>Mobx</h4>
              <small className="text-light">Experienced</small>
            </ExpDetails>
            <ExpDetails>
              <AiOutlineCheckCircle />
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </ExpDetails>
          </ExpContent>
        </ExpFront>
      </ExperienceContainer>
    </ExperienceWrapper>
  );
};

export default Experience;

const ExperienceWrapper = styled.section``;

const ExperienceContainer = styled.div``;

const ExpFront = styled.div``;

const ExpContent = styled.div``;

const ExpDetails = styled.article``;
