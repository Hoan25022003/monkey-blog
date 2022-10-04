import React from "react";
import styled from "styled-components";

const AuthStyle = styled.div`
  max-width: 600px;
  margin: 0 auto 20px;
  padding-top: 40px;
  text-align: center;
  .logo {
    width: 100px;
    margin: 0 auto;
  }
  .heading {
    font-weight: 600;
    font-size: 32px;
    line-height: 60px;
    color: ${(props) => props.theme.secondary};
    margin-top: 20px;
  }
  .form {
    margin-top: 28px;
  }
  .support {
    margin-top: 16px;
    font-size: 15px;
    &-link {
      color: ${(props) => props.theme.secondary};
      cursor: pointer;
      text-decoration: none;
    }
  }
`;

const AuthPage = ({ children }) => {
  return (
    <div className="container ">
      <AuthStyle>
        <img src="monkey-logo.png" alt="" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        {children}
      </AuthStyle>
    </div>
  );
};

export default AuthPage;
