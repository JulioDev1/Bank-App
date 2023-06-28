import { styled } from "styled-components";

export const InputStyled = styled.input`
  width: 90%;
  height: 28px;
  border-radius: 5px;
  background-color: #eeeeee;
  border: none;

  padding-left: 15px;
  &::placeholder {
    font-family: "Poppins", sans-serif;
  }
`;
