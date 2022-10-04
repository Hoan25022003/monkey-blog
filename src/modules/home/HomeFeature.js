import { where } from "firebase/firestore";
import React from "react";
import styled from "styled-components";
import Heading from "../../components/layout/Heading";
import useFetchData from "../../hooks/useFetchData";
import PostFeatureItem from "../post/PostFeatureItem";

const HomeFeatureStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px 40px;
`;

const HomeFeature = () => {
  const { data: postsFeature } = useFetchData("posts", [
    where("status", "==", 1),
    where("hot", "==", true),
  ]);
  if (postsFeature.length === 0) return;
  return (
    <>
      <Heading>Feature</Heading>
      <HomeFeatureStyle>
        {postsFeature.map((post) => (
          <PostFeatureItem
            userID={post.userID}
            categoryID={post.categoryID}
            title={post.title}
            linkImg={post.image}
            slugPost={post.slug}
            createAt={post.createAt}
          ></PostFeatureItem>
        ))}
      </HomeFeatureStyle>
    </>
  );
};

export default HomeFeature;
