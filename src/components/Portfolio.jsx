import React from "react";
import styled from "styled-components";
import IMG1 from "../assets/portfolio1.jpg";
import IMG2 from "../assets/portfolio2.jpg";
import IMG3 from "../assets/portfolio3.jpg";
import IMG4 from "../assets/portfolio4.jpg";
import IMG5 from "../assets/portfolio5.png";
import IMG6 from "../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    title: "WoodCoin",
    img: IMG1,
    github: "https://github.com",
    demo: "https://woodcoin.org/",
  },
  {
    id: 2,
    title: "Pims",
    img: IMG2,
    github: "https://github.com",
    demo: "https://pimstea.com/",
  },
  {
    id: 3,
    title: "VPN World",
    img: IMG3,
    github: "https://github.com",
    demo: "https://apps.apple.com/ru/app/vpnworld/id1624305127?l=ru",
  },
  {
    id: 4,
    title: "Foot Skill",
    img: IMG4,
    github: "https://github.com",
    demo: "https://apps.apple.com/ru/app/foot-skill/id1633652809?l=ru",
  },
  {
    id: 5,
    title: "DAARK",
    img: IMG5,
    github: "https://github.com",
    demo: "https://daark.ru/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <PortfilioContainer className="container">
        {data.map((e) => {
          return (
            <PortfolioItem key={e.id}>
              <PortfolioItemIMG>
                <img src={e.img} alt="" />
              </PortfolioItemIMG>
              <h3>{e.title}</h3>
              <PortfolioItemCTA>
                <a href={e.github} className="btn" target="_blank">
                  Github
                </a>
                <a href={e.demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </PortfolioItemCTA>
            </PortfolioItem>
          );
        })}
      </PortfilioContainer>
    </section>
  );
};

export default Portfolio;

const PortfilioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const PortfolioItem = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    border-color: var(--color-primary-variant);
    background: transparent;
  }

  & h3 {
    margin: 1.2rem 0 2rem;
  }
`;

const PortfolioItemIMG = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
`;

const PortfolioItemCTA = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;
