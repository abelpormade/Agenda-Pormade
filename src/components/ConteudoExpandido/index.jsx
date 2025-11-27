import Listar from "./Listar";
import Criar from "./Criar";
import styled from "styled-components";


const ConteudoExpandido = ({ ativo }) => {
  return (
    <>
      <Listar ativo={ativo} />
      <Criar ativo={ativo} />

    </>
     
  );
};

export default ConteudoExpandido;

