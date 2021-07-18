import styled from "styled-components";

export const Footer = styled.div`
  background-color: hsla(170, 10%, 10%, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 5vh;
  padding: 1rem;

  & span {
    font-size: 0.8rem;
    font-weight: 500;
    color: hsla(170, 50%, 20%, 1);
    text-align: center;

    & a {
      color: hsla(170, 90%, 40%, 1);
      text-decoration: none;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 10vh;
    flex-direction: column;
    gap: 0.5rem;
  }
  @media screen and (max-width: 767px) {
    height: 10vh;
    flex-direction: column;
    gap: 0.5rem;
  }
  @media screen and (max-width: 425px) {
    height: 15vh;
  }
`;
