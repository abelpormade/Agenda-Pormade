import styled from "styled-components";
import Pesquisa from "../../Pesquisa";
import { useState } from "react";
import { style } from "framer-motion/client";

export const DivExpandido = styled.div`
  position: relative;
  z-index: 10;
  width: 85vw;
  height: 85vh;
  background-color: rgba(240, 240, 240, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin: 3% 5% 0 25%;
  display: flex;
  gap: 50px;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: red;

  height: 8vh;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const MaiorQue = styled.svg`
  width: 70px;
  margin-left: 15px;
  cursor: pointer;
`;

const ContatoInicial = styled.h2`
  font-size: 32px;
  font-weight: bold;
`;

const DivDetalhes = styled.div`
  height: auto;
  background-color: #fff;
  padding: 25px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 18px;
  transition: .3s ease;
`;


const Span = styled.span`
  font-weight: bold;
  font-size: 22px;
  color: #333;
`;

const JuntaDivs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 60vw;
`;

const Informacoes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 22px 60px;
  justify-content: flex-start;

  p {
    font-size: 22px;
    display: flex;
    gap: 8px;
  }
`;

const Listar = ({ ativo }) => {
  const contatos = [
    {
      nome: "Yasmin",
      telefone: 426542132,
      email: "yasmin@pormade",
      empresa: "pormade",
      cargo: "trainee",
      setor: "TI",
    },
  ];

  const [contatoAberto, setContatoAberto] = useState(false);

  function AbreContato() {
    setContatoAberto(!contatoAberto);
  }

  return (
    <>
      {ativo === "listar" && (
        <DivExpandido>
          <Pesquisa />

          <JuntaDivs>
            {" "}
            <Container>
              <MaiorQue
                onClick={AbreContato}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="img"
              >
                <polyline
                  points="8 6 16 12 8 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </MaiorQue>

              <ContatoInicial>{contatos[0].nome}</ContatoInicial>
            </Container>
            {contatoAberto && (
             <DivDetalhes>
  <Informacoes>
    <p>
      <Span>Telefone:</Span> {contatos[0].telefone}
    </p>
    <p>
      <Span>Email:</Span> {contatos[0].email}
    </p>
    <p>
      <Span>Empresa:</Span> {contatos[0].empresa}
    </p>
    <p>
      <Span>Cargo:</Span> {contatos[0].cargo}
    </p>
    <p>
      <Span>Setor:</Span> {contatos[0].setor}
    </p>
  </Informacoes>
</DivDetalhes>

            )}
          </JuntaDivs>
        </DivExpandido>
      )}
    </>
  );
};

export default Listar;
