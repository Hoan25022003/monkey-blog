import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle2 = styled.button`
  width: ${(props) => props.size};
  background-color: ${(props) => props.bgColor || props.theme.secondary};
  font-size: 18px;
  font-weight: 600;
  padding: 16px 0;
  color: ${(props) => props.fontColor || "#fff"};
  border-radius: 8px;
  cursor: pointer;
`;

const Button2 = ({
  type = "button",
  link,
  size = "180px",
  children,
  onClick = () => {},
  ...props
}) => {
  if (link !== "" && typeof link === "string") {
    return (
      <Link to={link}>
        <ButtonStyle2 size={size} type={type} {...props}>
          {children}
        </ButtonStyle2>
      </Link>
    );
  }
  return (
    <ButtonStyle2 onClick={onClick} size={size} type={type} {...props}>
      {children}
    </ButtonStyle2>
  );
};

export default Button2;
