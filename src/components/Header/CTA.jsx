import React from "react";
import styled from "styled-components";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <Cta>
      <a href={CV} download className="btn">
        Dowload CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </Cta>
  );
};

export default CTA;

const Cta = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`;
