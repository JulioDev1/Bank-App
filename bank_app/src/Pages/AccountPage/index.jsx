import { useNavigate } from "react-router-dom";
import {
  NavBarAccount,
  Button,
  PageContainer,
  AccountContainer,
  UserContainer,
  Buttons,
} from "./styled";
import { Accounts } from "../../components/Accounts";
import { useEffect, useState } from "react";
import { viewAllAccount } from "../../api/bank";
import { Operations } from "../../components/Operation";

export const AccountPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  function handleChangePage() {
    navigate("/createCheckAccount");
  }
  function allAccounts() {
    navigate("/allAccountsTransactions");
  }
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await viewAllAccount();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  console.log(data);
  return (
    <PageContainer>
      <NavBarAccount>
        <span>Olá seja bem vindo</span>
        <Buttons>
          <Button onClick={handleChangePage}>criar conta</Button>
          <Button onClick={allAccounts}>Transações</Button>
        </Buttons>
      </NavBarAccount>
      <UserContainer>
        <Operations />
        <AccountContainer>
          {data ? (
            data.map((users) => (
              <Accounts
                key={users.id}
                nome={users.nome}
                saldo={users.saldo}
                numero={users.numero}
                data_de_abertura={users.data_de_abertura}
              />
            ))
          ) : (
            <p>carregando</p>
          )}
        </AccountContainer>
      </UserContainer>
    </PageContainer>
  );
};
