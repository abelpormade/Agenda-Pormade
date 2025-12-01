import { useState, useEffect } from "react";
import styled from "styled-components";
import { FundoBarra, FundoImgeTextos, ImgeTexto, LogoPormade, PormadeAgenda, TituloContainer } from "../../components/Barra";
import Fundo from "../../components/Fundo";
import Logo from "../../assets/images/folha.svg";
import Nav from "../../components/Nav";
import ConteudoExpandido from "../../components/ConteudoExpandido";

const PaginaWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const FundoContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const ContainerPrincipal = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;
  position: relative;
  z-index: 1;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
`;

const PaginaInicial = () => {
  const [ativo, setAtivo] = useState("listar");

  const [contatos, setContatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        const token = localStorage.getItem("token");

        const resposta = await fetch("http://localhost:3000/contatos",{
            headers: {
          Authorization: `Bearer ${token}`,
        },
        });
        const dados = await resposta.json();
        setContatos(dados);
      } catch (e) {
        setErro("Erro ao carregar usuários");
      } finally {
        setLoading(false);
      }
    }

    carregar();
  }, []);

  return (
    <PaginaWrapper>
      <FundoContainer>
        <Fundo />
      </FundoContainer>

      <ContainerPrincipal>
        <FundoBarra $JustifyContent="flex-start">
          <FundoImgeTextos>
            <ImgeTexto>
              <LogoPormade src={Logo} alt="logo" />
              <TituloContainer>
                <PormadeAgenda>Pormade</PormadeAgenda>
                <PormadeAgenda $fontWeight="400">Agenda</PormadeAgenda>
              </TituloContainer>
            </ImgeTexto>
          </FundoImgeTextos>

          <Nav ativo={ativo} setAtivo={setAtivo} />
        </FundoBarra>

        <ConteudoExpandido
          ativo={ativo}
          contatos={contatos}
          loading={loading}
          erro={erro}
        />
      </ContainerPrincipal>
    </PaginaWrapper>
  );
};

export default PaginaInicial;
