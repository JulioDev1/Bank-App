import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
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
    console.log(response.data);
    return response.data;
  } catch (erro) {
    console.log(erro);
  }
};

export const loginAccount = async (email, password) => {
  try {
    const response = await api.post("/login", {
      email: email,
      password: password,
    });
    return response.data;
  } catch (erro) {
    console.log(erro);
  }
};
export const createCheckAccount = async (nome, numero, saldo) => {
  try {
    const response = await api.post("/createCurrentAccount", {
      numero: numero,
      nome: nome,
      saldo: saldo,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const viewAllAccount = async () => {
  try {
    const response = await api.get("/allUserList");
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const submitTransactions = async (
  valor,
  contacorrente_origem,
  contacorrente_destino,
  observacao
) => {
  try {
    const response = await api.put("/submitTransActions", {
      valor: valor,
      contacorrente_origem: contacorrente_origem,
      contacorrente_destino: contacorrente_destino,
      observacao: observacao,
    });
    return response.data;
  } catch (error) {
    consol.log(error);
  }
};

export const listAllTransactions = async () => {
  try {
    const response = await api.get("/listUserTransactions");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
