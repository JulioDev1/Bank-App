import { styled } from "styled-components";

export const NavBarAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 3rem;
  background-color: #ffff;
`;
export const Button = styled.button`
  background-color: #7765e3;
  font-family: "Poppins", sans-serif;

  height: 2rem;
  border: none;
  color: white;
  border-radius: 5px;
  width: 7rem;
  cursor: pointer;
`;
export const PageContainer = styled.div`
  height: 100%;
`;
export const AccountContainer = styled.div`
  height: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
export const UserContainer = styled.div`
  display: flex;
  padding: 12px;
  gap: 20px;
  padding-right: 25px;
  flex-direction: row;
`;
export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;
