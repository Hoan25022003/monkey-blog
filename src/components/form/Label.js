import React from "react";
import styled from "styled-components";

const LabelStyle = styled.label`
  color: #292d32;
  font-weight: 600;
  font-size: 16px;
`;

const Label = ({ name, children }) => {
  return <LabelStyle htmlFor={name}>{children}</LabelStyle>;
};

export default Label;
