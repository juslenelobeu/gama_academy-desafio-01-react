import React from "react";

import * as S from "./styles";

export default function Footer() {
  return (
    <S.Footer>
      <span>
        Todos os dados contidos são fictícios e fazem parte da elaboração do
        desafio proposto no programa <strong>Hiring Coders</strong> oferecido
        para pela <strong>Gama Academy</strong>.
      </span>
      <span>
        By &nbsp;
        <a
          href="https://juslenelobeudesigner.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Juslene Lobeu
        </a>
      </span>
    </S.Footer>
  );
}
