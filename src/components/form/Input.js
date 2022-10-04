import React from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";

const InputStyle = styled.div`
  position: relative;
  border-radius: 8px;
  margin-top: 12px;
  input {
    border: 1px solid #ddd;
    width: 100%;
    border-radius: inherit;
    padding: 16px;
    outline: none;
    transition: all ease-in 0.2s;
    background-color: ${(props) => props.bgInput};
    &:focus {
      border: 1px solid ${(props) => props.theme.secondary};
    }
  }
  input::placeholder {
    color: #c4c4c4;
  }
`;

const Input = ({
  children,
  type = "text",
  name,
  control,
  errorMessage,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
  });
  // console.log(errorMessage);
  return (
    <InputStyle>
      <input type={type} id={name} {...field} {...props} />
      {children}
    </InputStyle>
  );
};

export default Input;
