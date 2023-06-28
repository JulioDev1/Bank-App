import { useState } from "react";
import { Input } from "../../components/Input";
import { Button, FormContainer, PageContainer } from "./styled";
import { loginAccount } from "../../api/bank";

export const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [isValid, setValid] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prev) => {
      const newData = { ...prev, [name]: value };
      return newData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginAccount(data.email, data.password);

      console.log(response);
      if (response) {
        setValid(false);
        window.location.href("/userPage");
      } else {
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  return (
    <PageContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h1>Login</h1>
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
        <Button type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </FormContainer>
    </PageContainer>
  );
};
