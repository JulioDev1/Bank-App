import {
  AccountContainer,
  Price,
  DateField,
  NameField,
  Value,
  FieldsInfo,
  HeaderFields,
} from "./styled";

export const Accounts = ({ numero, nome, data_de_abertura, saldo, key }) => {
  return (
    <AccountContainer key={key}>
      <HeaderFields>
        <span>Numero:{numero}</span>
        <NameField>{nome}</NameField>
      </HeaderFields>
      <FieldsInfo>
        <div>
          <Value>Valor em conta</Value>
          <Price>{saldo} R$</Price>
        </div>
        <DateField>{data_de_abertura}</DateField>
      </FieldsInfo>
    </AccountContainer>
  );
};
