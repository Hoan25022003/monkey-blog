import React from "react";
import styled from "styled-components";

const LoadingStyle = styled.div`
  display: inline-block;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border: ${(props) => props.border} solid #fff;
  border-top: ${(props) => props.border} solid transparent;
  display: flex;
  align-items: center;
  margin: 0 auto;
  border-radius: 50%;
  animation: spinner linear infinite 0.75s;
  @keyframes spinner {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner = ({ size, border }) => {
  return <LoadingStyle size={size} border={border}></LoadingStyle>;
};

export default LoadingSpinner;
