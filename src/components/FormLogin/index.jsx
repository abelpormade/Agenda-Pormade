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
export const FundoForm = styled.form`
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
  color: #fff;
  font-size: 60px;
`;

export const Inputs = styled.input`
  background-color: rgba(217, 217, 217, 0.8);
  width: 85%;
  height: 56px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 20px;

  &::placeholder {
    color: white;
  }
`;

const SpanParagrafo = styled.span`
  color: #00b000;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default function LoginDiv() {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErro("");

    try {
      const resposta = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: login,
          senha: senha,
        }),
      });

      if (!resposta.ok) {
        setErro("Login ou senha incorretos.");
        return;
      }

      const dados = await resposta.json();

      //  salvar token no localStorage
      localStorage.setItem("token", dados.access_token);

      //  redirecionar após login
      navigate("/paginainicial");

    } catch (e) {
      setErro("Erro ao conectar com o servidor.");
    }
  };

  return (
    <GuardaForm>
      <FundoForm onSubmit={handleSubmit}>
        <Textoh2>Entrar</Textoh2>

        <Inputs
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <Inputs
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {erro && <Paragrafo style={{ color: "red" }}>{erro}</Paragrafo>}

       <Botao/>

        <Paragrafo $fontSize="20px" $fontalign="center">
          Não tem uma conta? 
          <SpanParagrafo onClick={() => navigate("/cadastro")}>
            Crie uma
          </SpanParagrafo>
        </Paragrafo>
      </FundoForm>
    </GuardaForm>
  );
}
