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
            <ClientsName>Dan Vornovitskii</ClientsName>
            <ClientsReview>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic
              laudantium dolores, provident architecto amet laborum dolorum
              inventore alias quia dignissimos aut, dolorem, ullam repellendus
              corporis autem temporibus facilis mollitia?
            </ClientsReview>
          </ClientAvatar>
          <ClientAvatar>
            <img src={AVTR1} alt="client-avatar" />
            <ClientsName>Dan Vornovitskii</ClientsName>
            <ClientsReview>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic
              laudantium dolores, provident architecto amet laborum dolorum
              inventore alias quia dignissimos aut, dolorem, ullam repellendus
              corporis autem temporibus facilis mollitia?
            </ClientsReview>
          </ClientAvatar>
          <ClientAvatar>
            <img src={AVTR1} alt="client-avatar" />
            <ClientsName>Dan Vornovitskii</ClientsName>
            <ClientsReview>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic
              laudantium dolores, provident architecto amet laborum dolorum
              inventore alias quia dignissimos aut, dolorem, ullam repellendus
              corporis autem temporibus facilis mollitia?
            </ClientsReview>
          </ClientAvatar>
          <ClientAvatar>
            <img src={AVTR1} alt="client-avatar" />
            <ClientsName>Dan Vornovitskii</ClientsName>
            <ClientsReview>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic
              laudantium dolores, provident architecto amet laborum dolorum
              inventore alias quia dignissimos aut, dolorem, ullam repellendus
              corporis autem temporibus facilis mollitia?
            </ClientsReview>
          </ClientAvatar>
        </TestiArticle>
      </TestimonialsContainer>
    </section>
  );
};

export default Testimonials;

const TestimonialsContainer = styled.div``;

const TestiArticle = styled.article``;

const ClientAvatar = styled.div``;

const ClientsName = styled.h5``;

const ClientsReview = styled.small``;
