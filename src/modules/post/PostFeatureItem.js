import React from "react";
import PostCategory from "./PostCategory";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";
import PostImage from "./PostImage";
import styled from "styled-components";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebases/firebaseConfig";
import slugify from "slugify";

const PostFeatureItemStyles = styled.div`
  width: 100%;
  border-radius: 16px;
  position: relative;
  height: 169px;
  .post {
    &-overlay {
      position: absolute;
      inset: 0;
      border-radius: 16px;
      background: linear-gradient(
        179.77deg,
        #6b6b6b 36.45%,
        rgba(163, 163, 163, 0.622265) 63.98%,
        rgba(255, 255, 255, 0) 99.8%
      );
      mix-blend-mode: multiply;
      opacity: 0.6;
    }
    &-content {
      position: absolute;
      inset: 0;
      z-index: 10;
      padding: 20px;
      color: white;
    }
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
  }
  @media screen and (min-width: 1024px) {
    height: 272px;
  }
`;

const PostFeatureItem = ({
  userID,
  categoryID,
  linkImg,
  title,
  slugPost,
  createAt,
}) => {
  const [category, setCategory] = React.useState({});
  const [author, setAuthor] = React.useState({});
  React.useEffect(() => {
    async function getCategory() {
      const docRef = doc(db, "category", categoryID);
      const docSnap = await getDoc(docRef);
      setCategory(docSnap.data());
    }
    async function getAuthor() {
      const docRef = doc(db, "users", userID);
      const docSnap = await getDoc(docRef);
      setAuthor(docSnap.data());
    }
    getAuthor();
    getCategory();
  }, []);
  const date = new Date(createAt.seconds * 1000);
  const formDate = date.toLocaleDateString("vi-VI");
  return (
    <PostFeatureItemStyles>
      <PostImage src={linkImg}></PostImage>
      <div className="post-overlay"></div>
      <div className="post-content">
        <div className="post-top">
          <PostCategory to={category.slug}>{category.name}</PostCategory>
          <PostMeta
            color="white"
            author={author.fullName}
            to={slugify(author?.fullName || "", { lower: true })}
            time={formDate}
          ></PostMeta>
        </div>
        <PostTitle to={slugPost} style={{ color: "#fff" }}>
          {title}
        </PostTitle>
      </div>
    </PostFeatureItemStyles>
  );
};

export default PostFeatureItem;
