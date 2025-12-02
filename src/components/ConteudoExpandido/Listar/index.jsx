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
  width: 60VW;
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
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  padding: 0 30px;
  transition: max-height .35s ease, opacity .25s ease, padding .35s ease;
  margin-bottom: 8px;

  &.ativo {
    max-height: 500px; 
    opacity: 1;
    padding: 25px 30px;
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

const Listar = ({ ativo, contatos, loading, erro }) => {
  const [aberto, setAberto] = useState([]);



  function toggleContato(index) {
    setAberto(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  }
  const dadosLocais = [
  {
    id_usuario: 1,
    nome: "Contato Exemplo 1",
    telefone: "(11) 99999-1111",
    email: "exemplo1@teste.com",
    empresa: "Empresa X",
    cargo: "Analista",
    setor: "TI"
  },
  {
    id_usuario: 2,
    nome: "Contato Exemplo 2",
    telefone: "(11) 99999-2222",
    email: "exemplo2@teste.com",
    empresa: "Empresa Y",
    cargo: "Gerente",
    setor: "Financeiro"
  }
];
const contatosRender = (!loading && (erro || contatos.length === 0))
  ? dadosLocais
  : contatos;


  return (
    <>
      {ativo === "listar" && (
        <DivExpandido>
          <Pesquisa />

          {loading && <h2>Carregando...</h2>}
          {erro && <h2 style={{ color: "red" }}>{erro}</h2>}

          {!loading && contatos.length === 0 && dadosLocais===null && <h2>Nenhum contato encontrado.</h2>}

          
          {contatosRender.map((contato, index) => (
            <div key={index}>
              <Container onClick={() => toggleContato(index)}>
                <MaiorQue
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="img"
                  style={{
                    transform: aberto.includes(index) ? "rotate(90deg)" : "rotate(0deg)",
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

              <DivDetalhes className={aberto.includes(index) ? "ativo" : ""}>
                <Informacoes>
                  <p><Span>Telefone:</Span> {contato.telefone}</p>
                  <p><Span>Email:</Span> {contato.email}</p>
                  <p><Span>Empresa:</Span> {contato.empresa.nome}</p>
                  <p><Span>Cargo:</Span> {contato.cargo}</p>
                  <p><Span>Setor:</Span> {contato.setor}</p>
                   <p><Span>observações:</Span> {contato.observacoes}</p>
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
