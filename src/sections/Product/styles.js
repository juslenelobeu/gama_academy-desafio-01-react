import styled from "styled-components";

import background from "../../assets/images/geometric-section-two.svg";

export const Content = styled.div`
  background: url(${background}) center no-repeat;
  height: 100vh;
  max-width: 1366px;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  & h1 {
    font-size: 3.7rem;
    font-weight: 200;
    width: 60vw;
    color: hsla(170, 10%, 50%, 1);
  }

  & span {
    display: block;
    margin-bottom: 1.5rem;
  }

  & strong {
    font-weight: 500;
    color: hsla(170, 90%, 40%, 1);
  }

  & img {
    width: 40vw;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    & h1 {
      font-size: 2.7rem;
    }
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    background-repeat: repeat-y;
    background-size: contain;

    & h1 {
      text-align: center;
      font-size: 3rem;
      width: 90vw;
    }
    & img {
      width: 60vw;
    }
  }
  @media screen and (max-width: 425px) {
    & h1 {
      font-size: 2.5rem;
    }
    & img {
      width: 70vw;
    }
  }
`;
