import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../contexts/authContext";
import { auth } from "../../firebases/firebaseConfig";
import Button2 from "../button/Button2";
import IconSearch from "../icon/IconSearch";

const HeaderStyle = styled.header`
  display: flex;
  margin: 40px 0;
  justify-content: space-between;
  .header-left {
    display: flex;
    align-items: center;
    img {
      width: 42px;
    }
    &-nav {
      display: flex;
      margin-left: 24px;
      gap: 0 40px;
      .nav {
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        line-height: 27px;
        transition: all linear 0.2s;
        color: #000000;
        text-decoration: none;
        &:hover {
          color: ${(props) => props.theme.secondary};
        }
      }
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 0 20px;
    &-search {
      width: 320px;
      display: flex;
      align-items: center;
      border: 1px solid #cfcfcf;
      border-radius: 8px;
      input {
        width: 100%;
        padding: 16px 0 16px 20px;
        border-radius: inherit;
        &::placeholder {
          color: #999999;
          font-size: 15px;
        }
      }
    }
  }
`;

const listNav = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const Header = () => {
  const { userInfo } = useAuth();
  const handleSignOut = () => {
    signOut(auth);
    window.location.href = "/login";
  };
  return (
    <HeaderStyle className="header">
      <div className="header-left">
        <a href="/">
          <img src="monkey-logo.png" alt="" />
        </a>
        <div className="header-left-nav">
          {listNav.map((nav) => (
            <Link to={nav.url} key={nav.title} className="nav">
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="header-right">
        <div className="header-right-search">
          <input type="text" placeholder="Search posts..." />
          <IconSearch></IconSearch>
        </div>
        {userInfo?.email ? (
          <Button2 onClick={handleSignOut}>Log Out</Button2>
        ) : (
          <Button2 link={"/register"}>Sign Up</Button2>
        )}
      </div>
    </HeaderStyle>
  );
};

export default Header;
