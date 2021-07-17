import styled from "styled-components";

export const Display = styled.div`
  & h1 {
    font-size: 4.5rem;
    text-transform: uppercase;
    color: hsla(170, 100%, 50%, 1);
    font-weight: 700;
    text-shadow: 0px 0px 30px hsla(170, 100%, 50%, 1);
    box-shadow: 0px 0px 100px hsla(170, 100%, 50%, 0.5);
    border: solid hsla(170, 100%, 50%, 1);
    padding: 1.5rem 2.5rem;
    margin: 1rem 0;
  }

  & span {
    font-size: 1.5rem;
    color: hsla(170, 50%, 50%, 1);

    & strong {
      color: hsla(170, 100%, 50%, 1);
      font-weight: 600;
      text-transform: uppercase;
    }
  }

  @media screen and (max-width: 767px) {
    & h1 {
      font-size: 3.5rem;
    }

    & span {
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 425px) {
    & h1 {
      font-size: 2.2rem;
      padding: 1rem;
    }
  }
`;
