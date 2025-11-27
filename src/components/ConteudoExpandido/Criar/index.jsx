import { DivExpandido } from '../Listar'
import { FundoPesquisa } from  '../../Pesquisa'

const Criar= ({ativo}) => {
  return (
    <>
    {ativo === "criar" && (
            <DivExpandido>
              <FundoPesquisa />
            </DivExpandido>
          )}
          </>
  );
};

export default Criar;
