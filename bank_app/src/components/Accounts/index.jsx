import {
  AccountContainer,
  Price,
  DateField,
  NameField,
  Value,
  FieldsInfo,
  HeaderFields,
  ValueFields,
} from "./styled";

export const Accounts = ({ numero, nome, data_de_abertura, saldo, key }) => {
  return (
    <AccountContainer key={key}>
      <HeaderFields>
        <span>Numero:{numero}</span>
        <NameField>{nome}</NameField>
      </HeaderFields>
      <FieldsInfo>
        <ValueFields>
          <Value>Valor em conta</Value>
          <Price>{saldo} R$</Price>
        </ValueFields>
        <DateField>{data_de_abertura}</DateField>
      </FieldsInfo>
    </AccountContainer>
  );
};
