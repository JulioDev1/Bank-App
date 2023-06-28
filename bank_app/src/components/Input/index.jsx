import { InputStyled } from "./styled";

export const Input = ({ type, placeholder, onChange, name, value }) => {
  return (
    <>
      <InputStyled
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};
