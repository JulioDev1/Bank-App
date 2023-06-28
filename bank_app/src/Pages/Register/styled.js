import { styled } from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #cccc;
  width: 18rem;
  height: 25rem;
  padding: 12px;
  border-radius: 10px;
`;
export const PageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  font-family: "Poppins", sans-serif;
  width: 90%;
  height: 34px;
  background-color: #7765e3;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`;
