import React from "react";

import img from "../../assets/images/echo-dot.png";
import * as S from "./styles";

export default function Product() {
  return (
    <S.Content id="product">
      <h1>
        <span>Diga,</span>
        Olá <strong>Alexa</strong>, ajude a organizar o meu dia.
      </h1>
      <img src={img} alt="" />
    </S.Content>
  );
}
