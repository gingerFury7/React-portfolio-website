import React from "react";
import "./Testimonials.css";
import styled from "styled-components";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Dan Vornovitskii",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hiclaudantium dolores, provident architecto amet laborum doloruminventore alias quia dignissimos aut, dolorem, ullam repellenduscorporis autem temporibus facilis mollitia?",
  },
  {
    avatar: AVTR2,
    name: "Artem Semenov",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hiclaudantium dolores, provident architecto amet laborum doloruminventore alias quia dignissimos aut, dolorem, ullam repellenduscorporis autem temporibus facilis mollitia?",
  },
  {
    avatar: AVTR3,
    name: "Sharaf Bro",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hiclaudantium dolores, provident architecto amet laborum doloruminventore alias quia dignissimos aut, dolorem, ullam repellenduscorporis autem temporibus facilis mollitia?",
  },
  {
    avatar: AVTR4,
    name: "Kirill Cheburin",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hiclaudantium dolores, provident architecto amet laborum doloruminventore alias quia dignissimos aut, dolorem, ullam repellenduscorporis autem temporibus facilis mollitia?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {data.map((e, i) => {
          return (
            <SwiperSlide key={i} className="testimonials__article">
              <ClientAvatar>
                <img src={e.avatar} alt="client-avatar" />
              </ClientAvatar>
              <ClientsName>{e.name}</ClientsName>
              <ClientsReview>{e.review}</ClientsReview>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

const TestimonialsContainer = styled.div`
  width: 40%;

  @media screen and (max-width: 1024px) {
    width: 60%;
  }
  @media screen and (max-width: 600px) {
    width: var(--container-width-sm);
  }
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

  @media screen and (max-width: 600px) {
    width: var(--container-width-sm);
  }
`;
