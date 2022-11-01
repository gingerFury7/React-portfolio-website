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
              <AiOutlineCheckCircle className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </ExpDetails>
            <ExpDetails>
              <AiOutlineCheckCircle className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </ExpDetails>
            <ExpDetails>
              <AiOutlineCheckCircle className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </ExpDetails>
            <ExpDetails>
              <AiOutlineCheckCircle className="experience__details-icon" />
              <div>
                <h4>Mobx</h4>
                <small className="text-light">Experienced</small>
              </div>
            </ExpDetails>
            <ExpDetails>
              <AiOutlineCheckCircle className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </ExpDetails>
          </ExpContent>
        </ExpFront>
      </ExperienceContainer>
    </ExperienceWrapper>
  );
};

export default Experience;

const ExperienceWrapper = styled.section``;

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr;
  justify-items: center;
`;

const ExpFront = styled.div`
  background-color: var(--color-bg-variant);
  padding: 2.4rem 5rem;
  border: 1px solid transparent;
  border-radius: 2rem;
  transition: var(--transition);

  &:hover {
    background-color: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }

  & h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--color-primary);
  }
`;

const ExpContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
`;

const ExpDetails = styled.article`
  display: flex;
  gap: 1rem;
`;
