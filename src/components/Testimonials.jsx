import React from "react";
import styled from "styled-components";
import AVTR1 from "../assets/avatar1.jpg";
import AVTR2 from "../assets/avatar2.jpg";
import AVTR3 from "../assets/avatar3.jpg";
import AVTR4 from "../assets/avatar4.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <TestimonialsContainer className="container">
        <TestiArticle>
          <ClientAvatar>
            <img src={AVTR1} alt="client-avatar" />
          </ClientAvatar>
          <ClientsName>Dan Vornovitskii</ClientsName>
          <ClientsReview>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic
            laudantium dolores, provident architecto amet laborum dolorum
            inventore alias quia dignissimos aut, dolorem, ullam repellendus
            corporis autem temporibus facilis mollitia?
          </ClientsReview>
        </TestiArticle>
        <TestiArticle>
          <ClientAvatar>
            <img src={AVTR1} alt="client-avatar" />
          </ClientAvatar>
          <ClientsName>Dan Vornovitskii</ClientsName>
          <ClientsReview>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic
            laudantium dolores, provident architecto amet laborum dolorum
            inventore alias quia dignissimos aut, dolorem, ullam repellendus
            corporis autem temporibus facilis mollitia?
          </ClientsReview>
        </TestiArticle>
        <TestiArticle>
          <ClientAvatar>
            <img src={AVTR1} alt="client-avatar" />
          </ClientAvatar>
          <ClientsName>Dan Vornovitskii</ClientsName>
          <ClientsReview>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic
            laudantium dolores, provident architecto amet laborum dolorum
            inventore alias quia dignissimos aut, dolorem, ullam repellendus
            corporis autem temporibus facilis mollitia?
          </ClientsReview>
        </TestiArticle>
        <TestiArticle>
          <ClientAvatar>
            <img src={AVTR1} alt="client-avatar" />
          </ClientAvatar>
          <ClientsName>Dan Vornovitskii</ClientsName>
          <ClientsReview>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic
            laudantium dolores, provident architecto amet laborum dolorum
            inventore alias quia dignissimos aut, dolorem, ullam repellendus
            corporis autem temporibus facilis mollitia?
          </ClientsReview>
        </TestiArticle>
      </TestimonialsContainer>
    </section>
  );
};

export default Testimonials;

const TestimonialsContainer = styled.div`
  width: 40%;
`;

const TestiArticle = styled.article`
  background: var(--color-bg-variant);
  text-align: center;
  padding: 2rem;
  border-radius: 2rem;
  user-select: none;
`;

const ClientAvatar = styled.div`
  width: 4rem;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 0.4rem solid var(--color-primary-variant);
`;

const ClientsName = styled.h5``;

const ClientsReview = styled.small`
  color: var(--color-light);
  font-weight: 300;
  display: block;
  width: 80%;
  margin: 0.8rem auto 0;
`;
