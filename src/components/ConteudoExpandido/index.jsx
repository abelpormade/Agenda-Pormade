import Listar from "./Listar";





const ConteudoExpandido = ({ ativo, contatos, loading, erro }) => {
  return (
    <>
      {ativo === "listar" && (
        <Listar contatos={contatos} loading={loading} erro={erro} ativo={ativo} />
      )}
    </>
  );
};


export default ConteudoExpandido;

