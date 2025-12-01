import styled from "styled-components";
import Perfil from "../../assets/images/perfil.png";
import Lupa from "../../assets/images/lupa.png";

export const FundoPesquisa = styled.div`
  width: 100%;
  height: 90px;
  border-radius: 5px;
  background-color: #bdb4b4;
  display: flex;
  align-items: center;
  gap: 9%;
`;

const ContainerPesquisa = styled.div`
  position: relative;
  width: 82%;
  display: flex;
`;

const Search = styled.input`
  background-color: #ebe4e4;
  width: 100%;
  padding: 20px;
  font-size: 20px;
  margin: 1%;
  border-radius: 5px;
  border: #9c9797 1px solid;
  outline: none;
  display: block;

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
  }

  &:focus {
    box-shadow: 0 0 0 1px #575656 inset;
  }
`;
const PerfilImg = styled.img`
  width: 65px;
`;

const LupaImg = styled.img`
  width: 65px;
  position: absolute;
  top: 15%;
  right: 2%;
  opacity: 0.7;
`;

const Pesquisa = () => {
  return (
    <FundoPesquisa>
      <ContainerPesquisa>
        <Search type="search" placeholder="Pesquisar contato" />
        <LupaImg src={Lupa} />
      </ContainerPesquisa>

      <PerfilImg src={Perfil} />
    </FundoPesquisa>
  );
};

export default Pesquisa;
