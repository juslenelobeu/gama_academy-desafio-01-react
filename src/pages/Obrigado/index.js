import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../sections/Footer";

import * as S from "./styles";

import iconCheck from "../../assets/images/icon-check.svg";

export default function Obrigado() {
  const history = useHistory();
  const checkLead = localStorage.getItem("lead");
  if (checkLead == null) {
    history.push("/");
  }
  return (
    <>
      <S.Content>
        <h1>Cadastro realizado com sucesso!</h1>
        <h2>
          <img src={iconCheck} alt="Ícone check" />
          Obrigado por se cadastrar!
        </h2>
        <h3>Fique ligado em seu e-mail pois enviaremos ofertas arrasadoras!</h3>
      </S.Content>
      <Footer />
    </>
  );
}
