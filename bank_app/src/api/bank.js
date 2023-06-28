import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const createAccount = async (
  nome,
  cpf,
  data_de_nascimento,
  telefone,
  endereco,
  cep,
  email,
  password
) => {
  try {
    const response = await api.post("/create", {
      nome: nome,
      cpf: cpf,
      data_de_nascimento: data_de_nascimento,
      telefone: telefone,
      endereco: endereco,
      cep: cep,
      email: email,
      password: password,
    });
    console.log(response);
    return response.data;
  } catch (erro) {
    console.log(erro);
  }
};
