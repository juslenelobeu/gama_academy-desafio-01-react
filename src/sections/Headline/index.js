import React from "react";
import Display from "../../components/Display";
import Form from "../../components/Form";

import iconDown from "../../assets/images/icon-arrow-down.svg";
import * as S from "./styles";

export default function Headline() {
  return (
    <S.Headline id="headline">
      <Display />
      <Form />
      <footer>
        <h3>Conheça algumas das ofertas que estão por vir!</h3>
        <a href="#product">
          <img src={iconDown} alt="" />
        </a>
      </footer>
    </S.Headline>
  );
}
