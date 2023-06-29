import { useState } from "react";
import { Input } from "../../components/Input";
import { Button, FormContainer, PageContainer } from "./styled";
import { createCheckAccount } from "../../api/bank";

export const CreateCheckAccount = () => {
  const [data, setData] = useState({
    nome: "",
    numero: "",
    saldo: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => {
      const newData = {
        ...prev,
        [name]: value,
      };
      return newData;
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createCheckAccount(
        data.nome,
        data.numero,
        data.saldo
      );
      console.log(response);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);
  return (
    <PageContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h1>Criar Conta</h1>
        <Input
          onChange={handleChange}
          name="nome"
          value={data.nome}
          saldo={data.nome}
          placeholder="informe nome da conta"
        />
        <Input
          onChange={handleChange}
          name="numero"
          value={data.numero}
          saldo={data.numero}
          placeholder="informe numero da conta"
        />

        <Input
          onChange={handleChange}
          name="saldo"
          value={data.saldo}
          saldo={data.saldo}
          placeholder="informe o valor de deposito da conta"
        />

        <Button onSubmit={handleSubmit}>Create Account</Button>
      </FormContainer>
    </PageContainer>
  );
};
