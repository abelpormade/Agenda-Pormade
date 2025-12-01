import styled from "styled-components";
import Pesquisa from "../../Pesquisa";
import { useState } from "react";

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
  gap: 20px;
  align-items: center;
  flex-direction: column;
  padding-top: 25px;
`;

const Container = styled.div`
  background-color: red;
  height: 8vh;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

const MaiorQue = styled.svg`
  width: 30px;
  height: 30px;
  margin-left: 15px;
  transition: transform .28s ease;
`;

const ContatoInicial = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin: 0 12px;
`;

const DivDetalhes = styled.div`
  background-color: #fff;
  padding: 25px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 18px;
  opacity: 0;
  transform: translateY(-8px);
  pointer-events: none; 
  transition: opacity .32s ease, transform .32s ease;
  margin-bottom: 8px;

  &.ativo {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

const Span = styled.span`
  font-weight: bold;
  font-size: 22px;
  color: #333;
`;

const Informacoes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 22px 60px;

  p {
    font-size: 20px;
    display: flex;
    gap: 8px;
    margin: 0;
  }
`;

const Listar = ({ ativo }) => {
  const contatos = [
    {
      nome: "Yasmin",
      telefone: "426542132",
      email: "yasmin@pormade",
      empresa: "Pormade",
      cargo: "Trainee",
      setor: "TI",
    },
    {
      nome: "João Silva",
      telefone: "489998877",
      email: "joao@pormade",
      empresa: "Pormade",
      cargo: "Analista",
      setor: "TI",
    },
    {
      nome: "Carla Souza",
      telefone: "319445577",
      email: "carla@pormade",
      empresa: "Pormade",
      cargo: "Gestora",
      setor: "RH",
    },
  ];

  const [aberto, setAberto] = useState(null);

  function toggleContato(index) {
    setAberto((prev) => (prev === index ? null : index));
  }

  return (
    <>
      {ativo === "listar" && (
        <DivExpandido>
          <Pesquisa />

          {contatos.map((contato, index) => (
            <div key={index}>

              <Container onClick={() => toggleContato(index)}>
                <MaiorQue
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="img"
                  style={{
                    transform: aberto === index ? "rotate(90deg)" : "rotate(0deg)",
                  }}
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

                <ContatoInicial>{contato.nome}</ContatoInicial>
              </Container>

              <DivDetalhes className={aberto === index ? "ativo" : ""}>
                <Informacoes>
                  <p>
                    <Span>Telefone:</Span> {contato.telefone}
                  </p>
                  <p>
                    <Span>Email:</Span> {contato.email}
                  </p>
                  <p>
                    <Span>Empresa:</Span> {contato.empresa}
                  </p>
                  <p>
                    <Span>Cargo:</Span> {contato.cargo}
                  </p>
                  <p>
                    <Span>Setor:</Span> {contato.setor}
                  </p>
                </Informacoes>
              </DivDetalhes>

            </div>
          ))}
        </DivExpandido>
      )}
    </>
  );
};

export default Listar;
