import React, { useState } from "react";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import * as S from "./styles";
import "react-toastify/dist/ReactToastify.css";

import iconCheck from "../../assets/images/icon-check.svg";
import iconMail from "../../assets/images/icon-mail.svg";

export default function Form() {
  const history = useHistory();
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
    const regex =
      /^(\S+)@((?:(?:(?!-)[a-zA-Z0-9-]{1,62}[a-zA-Z0-9])\.)+[a-zA-Z0-9]{2,12})$/;
    if (user.name === "") {
      return toast.error("Informe o seu nome, por favor.");
    } else if (user.email === "") {
      return toast.error("Informe o seu e-mail, por favor.");
    } else if (regex.test(user.email) === false) {
      return toast.error("Informe um e-mail correto, por favor.");
    } else {
      toast.success("Cadastro realizado!");
      const lead = JSON.stringify(user);
      localStorage.setItem("lead", lead);
    }
    setUser({
      name: "",
      email: "",
    });
    setTimeout(() => {
      history.push("/obrigado");
    }, 2000);
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
          <ToastContainer />
        </S.FormGroup>
      </S.Form>
    </>
  );
}
