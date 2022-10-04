import React from "react";
import styled from "styled-components";
import LoadingSpinner from "../loading/LoadingSpinner";
import PropTypes from "prop-types";

const ButtonStyle = styled.button`
  margin-top: 16px;
  background: ${(props) => props.theme.gradientColor};
  width: 250px;
  cursor: pointer;
  padding: 18px 0;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  transition: all ease-in 0.25s;
  font-weight: 600;
  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`;

const Button = ({
  children,
  type = "button",
  onClick = () => {},
  ...props
}) => {
  const { loading } = props;
  return (
    <ButtonStyle type={type} onClick={onClick} disabled={loading} {...props}>
      {loading ? (
        <LoadingSpinner size="30px" border="4px"></LoadingSpinner>
      ) : (
        children
      )}
    </ButtonStyle>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
  loading: PropTypes.bool,
};

export default Button;
