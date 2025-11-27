import styled, { css } from "styled-components";

const ListaNav = styled.div`
  width: 80%;
  background-color: rgb(217,217,217, 0.7) ;
  box-shadow: 3px 3px #ffffff;

  height: 60px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 22px;
  margin-right: 39px;
  border-radius: 10px;
  color: #fdfbfb;
  cursor: pointer;
  user-select: none;

  ${({ $active }) =>
    $active &&
    css`
      background-color: rgb(217,217,217, 0.3);
      box-shadow: none;
      transform: translate(3px, 3px);
      color: #ffffff;
      font-weight: bold;
    `}
`;

const Nav = ({ ativo, setAtivo }) => {
  return (
    <>
      <ListaNav $active={ativo === "listar"} onClick={() => setAtivo("listar")}>
        Listar Contatos
      </ListaNav>

      <ListaNav $active={ativo === "criar"} onClick={() => setAtivo("criar")}>
        Criar Contato
      </ListaNav>
    </>
  );
};

export default Nav;
