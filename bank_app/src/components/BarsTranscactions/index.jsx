import { BarsContainers, InfoFields, ValueField } from "./styled";

export const BarsTransactions = ({
  tipo,
  valor,
  data_de_movimento,
  contacorrente_origem,
  contacorrente_destino,
  observacao,
}) => {
  return (
    <BarsContainers>
      <ValueField>
        <h1>{valor} R$</h1>
        <p>{tipo}</p>
      </ValueField>
      <InfoFields>
        <p>
          conta de origem:{contacorrente_origem} / {contacorrente_destino}
        </p>
        <p>{data_de_movimento}</p>

        <p>{observacao}</p>
      </InfoFields>
    </BarsContainers>
  );
};
