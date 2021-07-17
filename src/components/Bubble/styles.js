import styled from "styled-components";

export const Bubble = styled.span`
  width: auto;
  background: white;
  padding: 1rem;
  border-radius: 5px;
  color: hsla(170, 50%, 20%, 1);
  font-size: 0.8rem;
  font-weight: 400;
  text-align: center;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 0.5rem;
    font-size: 0.7rem;
  }
  @media screen and (max-width: 767px) {
    padding: 0.6rem;
    font-size: 0.8rem;
  }
`;
