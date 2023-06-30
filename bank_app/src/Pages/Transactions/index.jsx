import { useEffect, useState } from "react";
import { BarsTransactions } from "../../components/BarsTranscactions";
import { TransactionsContainer } from "./styled";
import { listAllTransactions } from "../../api/bank";

export const Transactions = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await listAllTransactions();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  console.log(data);
  return (
    <TransactionsContainer>
      {data.map((user) => (
        <BarsTransactions
          valor={user.valor}
          contacorrente_destino={user.contacorrente_destino}
          contacorrente_origem={user.contacorrente_origem}
          data_de_movimento={user.data_de_movimento}
          observacao={user.observacao}
          tipo={user.tipo}
        />
      ))}
    </TransactionsContainer>
  );
};
