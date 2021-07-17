import styled from "styled-components";

import background from "../../assets/images/geometric-section-two.svg";

export const Content = styled.div`
  background: hsla(170, 90%, 40%, 1) url(${background}) center no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  height: 95vh;
  text-align: center;

  & h1 {
    margin-top: 6rem;
    font-size: 2rem;
    color: hsla(170, 50%, 20%, 1);
  }

  & h2 {
    width: 60vw;
    margin: 1rem 0;
    color: white;
    font-size: 3rem;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  }

  & h3 {
    font-weight: 400;
    color: hsla(170, 50%, 20%, 1);
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 90vh;
    & h2 {
      width: 80vw;
      font-size: 2.5rem;
    }
  }
  @media screen and (max-width: 767px) {
    & h1 {
      font-size: 1.5rem;
      margin-top: 4rem;
    }
    & h2 {
      width: 80vw;
      font-size: 1.7rem;
    }
    & h3 {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 425px) {
    height: auto;

    & h3 {
      width: 80vw;
      margin-top: 1rem;
    }
  }
`;

export const Frequency = styled.div`
  margin-top: -50px;
  position: absolute;
  z-index: 999;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const DetailsProductDisplay = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    & img {
      width: 25vw;
    }
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    & img {
      width: 40vw;
      order: 1;
    }
  }
`;

export const BubbleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Link = styled.a`
  background: hsla(170, 50%, 20%, 1);
  border: 0.2rem solid hsla(170, 50%, 20%, 1);
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 2rem;

  text-decoration: none;
  color: hsla(170, 90%, 40%, 1);
  font-weight: 600;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  transform: scale(0.8);
  transition: background 0.3s;

  &:hover {
    background: transparent;
    border: 0.2rem solid hsla(170, 50%, 20%, 1);
    color: hsla(170, 10%, 10%, 1);
  }

  @media screen and (max-width: 425px) {
    margin-top: 1rem;
  }
`;
