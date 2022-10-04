import React from "react";
import styled from "styled-components";

const FieldStyle = styled.div`
  text-align: left;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Field = ({ children }) => {
  return <FieldStyle className="form-group">{children}</FieldStyle>;
};

export default Field;
