import styled from "styled-components";

import background from "../../assets/images/geometric-section-one.svg";

export const Headline = styled.div`
  background: hsla(170, 10%, 10%, 1) url(${background}) center no-repeat;
  width: 100vw;
  height: 100vh;
  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  row-gap: 4rem;

  color: hsla(170, 50%, 50%, 1);
  text-align: center;

  position: relative;

  & span {
    font-size: 1.2rem;
  }

  & h3 {
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 767px) {
    row-gap: 2rem;
    background-repeat: repeat-y;
    background-size: contain;
  }
  @media screen and (max-width: 425px) {
    padding: 3rem 2rem;

    & h3 {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }
`;
