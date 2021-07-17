import React from "react";

import * as S from "./styles";

export default function Input({ type, placeholder, id, name }) {
  const handleInputChange = (e) => {
    console.log("tudo ok");
  };
  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      onChange={handleInputChange}
    />
  );
}
