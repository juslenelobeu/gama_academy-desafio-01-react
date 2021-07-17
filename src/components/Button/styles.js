import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 200px;
  padding: 1.5rem;
  background: hsla(170, 100%, 50%, 1);

  border-radius: 5px;
  border: none;

  text-transform: uppercase;
  font-weight: 700;
  font-size: 1rem;

  cursor: pointer;
  transition: background 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;

  & img {
    vertical-align: middle;
  }

  &:hover {
    background: hsla(170, 90%, 40%, 1);
  }

  @media screen and (max-width: 767px) {
    min-width: 90%;
    padding: 1rem;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 425px) {
    min-width: 100%;
  }
`;
