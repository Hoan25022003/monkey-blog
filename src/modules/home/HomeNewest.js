import React from "react";
import styled from "styled-components";
import Heading from "../../components/layout/Heading";
import PostItem from "../post/PostItem";
import PostNewestItem from "../post/PostNewestItem";
import PostNewestLarge from "../post/PostNewestLarge";

const HomeNewestStyles = styled.div`
  .layout {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 40px;
    margin-bottom: 64px;
    align-items: start;
  }
  .sidebar {
    padding: 28px 20px;
    background-color: #f3edff;
    border-radius: 16px;
  }
  .grid-layout {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 20px 40px;
    padding-bottom: 40px;
  }
`;

const HomeNewest = () => {
  return (
    <HomeNewestStyles className="home-block">
      <Heading>Newest update</Heading>
      <div className="layout">
        <PostNewestLarge></PostNewestLarge>
        <div className="sidebar">
          <PostNewestItem></PostNewestItem>
          <PostNewestItem></PostNewestItem>
          <PostNewestItem></PostNewestItem>
        </div>
      </div>
      <div className="grid-layout grid-layout--primary"></div>
    </HomeNewestStyles>
  );
};

export default HomeNewest;
