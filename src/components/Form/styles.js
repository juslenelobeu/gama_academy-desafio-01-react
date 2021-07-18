import styled from "styled-components";

export const Form = styled.div`
  & h2 {
    & img {
      margin-right: 0.5rem;
    }
  }
  & input {
    font-weight: 400;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;

    & h2 {
      font-size: 1.1rem;
    }
  }
  @media screen and (max-width: 425px) {
    & h2 {
      font-size: 1rem;
    }
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 425px) {
    margin-top: 2rem;
  }
`;

export const Input = styled.input`
  font-family: "Inter", sans-serif;
  min-width: 300px;
  border: 0;
  border-radius: 5px;
  padding: 1.5rem;
  outline: none;

  color: #738c88;
  font-size: 1rem;
  font-weight: 300;

  &::placeholder {
    color: #738c88;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    min-width: 250px;
  }
  @media screen and (max-width: 767px) {
    min-width: 90%;
    text-align: center;
    padding: 1rem;
    font-size: 0.9rem;
    font-weight: 400;
  }
  @media screen and (max-width: 425px) {
    min-width: 100%;
  }
`;
