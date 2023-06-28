import { useState } from "react";
import { Input } from "../../components/Input";
import { Button, FormContainer, PageContainer } from "./styled";
import { createAccount } from "../../api/bank";

export function Register() {
  const [data, setData] = useState({
    nome: "",
    cpf: "",
    data_de_nascimento: "",
    telefone: "",
    endereco: "",
    cep: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prev) => {
      const newData = { ...prev, [name]: value };
      return newData;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = createAccount(
        data.nome,
        data.cpf,
        data.data_de_nascimento,
        data.telefone,
        data.endereco,
        data.cep,
        data.email,
        data.password
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  return (
    <PageContainer onSubmit={handleSubmit}>
      <FormContainer>
        <h1>Registre-se!</h1>
        <Input
          value={data.nome}
          name="nome"
          type="text"
          placeholder="Digite seu Email"
          onChange={handleChange}
        />
        <Input
          type="text"
          value={data.cpf}
          placeholder="Digite seu cpf"
          name="cpf"
          onChange={handleChange}
        />
        <Input
          type="date"
          value={data.data_de_nascimento}
          placeholder="Digite sua data de nascimento"
          name="data_de_nascimento"
          onChange={handleChange}
        />
        <Input
          type="text"
          value={data.endereco}
          placeholder="Digite seu endereço"
          name="endereco"
          onChange={handleChange}
        />
        <Input
          type="text"
          value={data.cep}
          placeholder="Digite seu cep"
          name="cep"
          onChange={handleChange}
        />
        <Input
          type="text"
          value={data.telefone}
          placeholder="Digite seu numero"
          name="telefone"
          onChange={handleChange}
        />
        <Input
          type="text"
          value={data.email}
          placeholder="Digite seu email"
          name="email"
          onChange={handleChange}
        />
        <Input
          type="text"
          value={data.password}
          placeholder="Digite sua senha"
          name="password"
          onChange={handleChange}
        />
        <Button type="button" onClick={handleSubmit}>
          Registrar
        </Button>
      </FormContainer>
    </PageContainer>
  );
}
