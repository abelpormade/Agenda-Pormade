import styled from 'styled-components'
import Logo from '../../assets/folha.svg'

export const FundoBarra = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 20vw;
  background-image: linear-gradient(180deg, #1f1e1e, #000000);
  display: flex;                                  
  flex-direction: column;
  align-items: flex-end;
  justify-content: ${({ $JustifyContent }) => $JustifyContent || "center"} ;
  color: #fff;
  text-align: center;
  z-index: 10;
  gap: 30px;
`;

export const FundoImgeTextos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 55px;
`;

export const ImgeTexto = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
`;

export const Paragrafo = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== '$fontSize' && prop !== '$fontalign'
})`
  color: #fff;
  font-size: ${({ $fontSize }) => $fontSize || "20px"};
  font-weight: 400;
  line-height: 1.3;
  width: 70%;
  text-align: ${({ $fontalign }) => $fontalign || "right"};
`;

export const LogoPormade = styled.img`
  width: 100px;
  height: auto;
`;

export const TituloContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 1;
`;

export const PormadeAgenda = styled.h1`
  color: #fff;
  font-size: 36px;
  font-weight: ${({ $fontWeight }) => $fontWeight || 700};
  margin: 0;
`;

export default function Barra() {
  return (
    <FundoBarra>
      <FundoImgeTextos>
        <ImgeTexto>
          <LogoPormade src={Logo} alt="logo" />
          <TituloContainer>
            <PormadeAgenda>Pormade</PormadeAgenda>
            <PormadeAgenda $fontWeight="400">Agenda</PormadeAgenda>
          </TituloContainer>
        </ImgeTexto>

        <Paragrafo>
          Organize seus contatos, mantenha seu calendário em dia e muito mais
        </Paragrafo>
      </FundoImgeTextos>
    </FundoBarra>
  );
}
