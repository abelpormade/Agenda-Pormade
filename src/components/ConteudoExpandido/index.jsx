import Listar from "./Listar";
import Criar from "./Criar";


const ConteudoExpandido = ({ ativo }) => {
  return (
    <>
      <Listar ativo={ativo} />
      <Criar ativo={ativo} />

    </>
     
  );
};

export default ConteudoExpandido;

