import React from "react";
import { ButtonStyled } from "./styles.js";

export default function Button(props) {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
}
