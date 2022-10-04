import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button2 from "../../components/button/Button2";
import { useAuth } from "../../contexts/authContext";
const DashboardHeaderStyles = styled.div`
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  .header-logo {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 20px;
    gap: 0 20px;
    img {
      max-width: 40px;
    }
    margin-bottom: 20px;
    padding: 20px 20px 0;
  }
  .header-info {
    display: flex;
    align-items: center;
    gap: 0 20px;
  }
  .header-avatar {
    display: flex;
    align-items: center;
    img {
      width: 52px;
      height: 52px;
      object-fit: cover;
      border-radius: 100rem;
    }
    span {
      margin-right: 10px;
      font-weight: 600;
      font-size: 16px;
    }
  }
`;

const DashboardHeader = () => {
  const { personalInfo } = useAuth();
  return (
    <DashboardHeaderStyles>
      <Link to={"/"} className="header-logo">
        <img srcSet="/monkey-logo.png 2x" alt="" />
        <span>Monkey Blogging</span>
      </Link>
      <div className="header-info">
        <Button2 link="/manage/add-post">Write new post</Button2>
        <Link className="header-avatar" to={"/profile"}>
          <span>{personalInfo.fullName}</span>
          <img src={personalInfo.avatar} alt="" />
        </Link>
      </div>
    </DashboardHeaderStyles>
  );
};

export default DashboardHeader;
