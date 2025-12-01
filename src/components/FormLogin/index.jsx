import React, { useState } from "react";
import Botao from "../Botao";
import styled from "styled-components";
import { Paragrafo } from "../Barra";
import { useNavigate } from "react-router-dom";

export const GuardaForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const FundoForm = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ $width }) => $width || '20vw'} ;
  height: ${({ $height }) => $height || "auto"};
  gap: ${({ $Gap }) => $Gap || "30px"};
`;
export const Textoh2 = styled.h2`
  color: white;
  margin-top: 10px;
  margin-bottom: ${({$marginbottom}) =>$marginbottom || '10px'};
  color: #fff;
  font-size: 60px;
`;

export const Inputs = styled.input`
background-color: rgba(217, 217, 217, 0.8);
  width: 85%;
  height: 56px;
  padding: ${({ $padding }) => $padding || "0 8px"};
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 20px;

  &::placeholder{
    color: white;
  }
`;

const SpanParagrafo = styled.span`
  color: #00b000;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function LoginDiv() {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login:", login, "Senha:", senha);
  };

  return (
    <GuardaForm>
      <FundoForm onSubmit={handleSubmit}>
        <input
          type="text"
          style={{ position: "absolute", opacity: 0, height: 0, width: 0 }}
        />
        <input
          type="password"
          style={{ position: "absolute", opacity: 0, height: 0, width: 0 }}
        />

        <Textoh2>Entrar</Textoh2>
        <Inputs
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          autoComplete="no-login-autocomplete"
        />

        <Inputs
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          autoComplete="off-senha"
        />

        <Botao redirectTo={"/paginainicial"} />

        <Paragrafo $fontSize="20px" $fontalign="center">
          Não tem uma conta? 
          <SpanParagrafo
            onClick={() => navigate("/cadastro")}
            style={{ cursor: "pointer" }}
          >
             Crie uma
          </SpanParagrafo>
        </Paragrafo>
      </FundoForm>
    </GuardaForm>
  );
}
