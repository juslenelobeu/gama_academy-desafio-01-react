import styled from "styled-components";

import background from "../../assets/images/geometric-section-one.svg";

export const Content = styled.div`
  background: hsla(170, 10%, 10%, 1) url(${background}) center no-repeat;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 0 2rem;

  color: hsla(170, 50%, 50%, 1);
  text-align: center;

  & h1 {
    color: hsla(170, 100%, 50%, 1);
    font-size: 3rem;
  }

  & h2 {
    font-size: 1.5rem;

    & strong {
      color: hsla(170, 100%, 50%, 1);
    }

    & img {
      margin-right: 0.5rem;
    }
  }

  transition-duration: all 1s;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 90vh;
  }
  @media screen and (max-width: 767px) {
    height: 90vh;
    background-repeat: repeat-y;
    background-size: contain;

    & h1 {
      font-size: 2.5rem;
    }
  }
  @media screen and (max-width: 425px) {
    height: 85vh;

    & h1 {
      font-size: 2rem;
    }
  }
`;
