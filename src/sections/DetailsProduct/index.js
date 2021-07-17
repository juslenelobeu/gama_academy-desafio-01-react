import React from "react";

import Bubble from "../../components/Bubble";

import * as S from "./styles";

import frequency from "../../assets/images/frequency.svg";
import img from "../../assets/images/echo-dot-3.png";
import iconArrowRight from "../../assets/images/icon-arrow-right.svg";

export default function DetailsProduct() {
  return (
    <>
      <S.Frequency>
        <a href="#detailsProduct">
          <img src={frequency} alt="" />
        </a>
      </S.Frequency>
      <S.Content id="detailsProduct">
        <h1>
          Torne os seus dias mais <strong>produtivos</strong>.
        </h1>
        <h2>
          Toda a linha <strong>echo dot</strong> estará com <strong>15%</strong>{" "}
          de desconto!
        </h2>
        <S.DetailsProductDisplay>
          <S.BubbleGroup>
            <Bubble>
              <strong>Alexa</strong>, ativar timer de 25 minutos!
            </Bubble>
            <Bubble>
              <strong>Alexa</strong>, quero ouvir lo-fi!
            </Bubble>
          </S.BubbleGroup>
          <img src={img} alt="Três echo dots" />
          <S.BubbleGroup>
            <Bubble>
              <strong>Alexa</strong>, ligar para fornecedor de papel!
            </Bubble>
            <Bubble>
              <strong>Alexa</strong>, agendar reunião para amanhã às 15 horas!
            </Bubble>
          </S.BubbleGroup>
        </S.DetailsProductDisplay>
        <h3>Cadastre o seu e-mail e receba essa e muitas outras ofertas!</h3>
        <S.Link href="#headline">
          Cadastrar e-mail
          <img src={iconArrowRight} alt="Ícone de seta para direita" />
        </S.Link>
      </S.Content>
    </>
  );
}
