import { styled } from "styled-components";

export const InputStyled = styled.input`
  width: 90%;
  height: 28px;
  border-radius: 5px;
  border: 1px solid #cccc;

  padding-left: 15px;
  &::placeholder {
    font-family: "Poppins", sans-serif;
  }
`;
