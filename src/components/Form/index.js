import React, { useState } from "react";
import Button from "../Button";

import * as S from "./styles";
import iconCheck from "../../assets/images/icon-check.svg";
import iconMail from "../../assets/images/icon-mail.svg";

export default function Form() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name === "") {
      alert("Informe o seu nome, por favor.");
    } else if (user.email === "") {
      alert("Informe o seu e-mail, por favor.");
    } else {
      const lead = JSON.stringify(user);
      localStorage.setItem("lead", lead);
    }
    setUser({
      name: "",
      email: "",
    });
  };

  return (
    <>
      <S.Form>
        <h2>
          <img src={iconCheck} alt="" />
          Faça o seu cadastro e receba ofertas em primeira mão!
        </h2>
        <S.FormGroup>
          <S.Input
            type="text"
            name="name"
            placeholder="Informe seu nome completo"
            id="name"
            autoComplete="name"
            required
            value={user.name}
            onChange={handleInputChange}
          />
          <S.Input
            type="email"
            name="email"
            placeholder="Informe seu melhor e-mail"
            id="email"
            autoComplete="username"
            required
            value={user.email}
            onChange={handleInputChange}
          />
          <Button type="submit" onClick={handleSubmit}>
            <img src={iconMail} alt="" />
            Cadastrar
          </Button>
        </S.FormGroup>
      </S.Form>
    </>
  );
}
