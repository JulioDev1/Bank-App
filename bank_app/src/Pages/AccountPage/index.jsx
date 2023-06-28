import {
  NavBarAccount,
  Button,
  PageContainer,
  AccountContainer,
} from "./styled";

function handleChangePage() {
  const link = "/createCheckAccount";
  window.location.assign(link);
}

export const AccountPage = () => {
  return (
    <PageContainer>
      <NavBarAccount>
        <span>Olá seja bem vindo</span>
        <Button onClick={handleChangePage}>criar conta</Button>
      </NavBarAccount>
      <AccountContainer>
        <h1>Nenhuma conta Registrada</h1>
      </AccountContainer>
    </PageContainer>
  );
};
