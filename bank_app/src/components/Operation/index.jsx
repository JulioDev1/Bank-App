import { useState } from "react";
import { Input } from "../Input";
import { Button, FormContainer } from "./styled";
import { submitTransactions } from "../../api/bank";

export const Operations = () => {
  const [data, setData] = useState({
    valor: "",
    contacorrente_origem: "",
    contacorrente_destino: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prev) => {
      const newData = { ...prev, [name]: value };
      return newData;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await submitTransactions(
        data.valor,
        data.contacorrente_origem,
        data.contacorrente_destino
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>Operações</h1>
      <Input
        type="text"
        name="valor"
        value={data.valor}
        placeholder="digite o valor de transferencia"
        onChange={handleChange}
      />
      <Input
        type="text"
        name="contacorrente_origem"
        value={data.contacorrente_origem}
        placeholder="digite a origem"
        onChange={handleChange}
      />
      <Input
        type="text"
        name="contacorrente_destino"
        value={data.contacorrente_destino}
        placeholder="digite o destino"
        onChange={handleChange}
      />
      <Button type="Submit">Fazer Transação</Button>
    </FormContainer>
  );
};
