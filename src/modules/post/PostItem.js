import { doc, getDoc } from "firebase/firestore";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";
import { db } from "../../firebases/firebaseConfig";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";

const PostItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .post {
    &-image {
      height: 202px;
      margin-bottom: 12px;
      display: block;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
      }
    }
    &-info {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      font-weight: 600;
      color: #6b6b6b;
      margin-top: auto;
    }
    &-dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      background-color: currentColor;
      border-radius: 100rem;
    }
    &-title {
      font-weight: bold;
      line-height: 1.5;
      display: block;
      font-size: 18px;
      margin-bottom: 8px;
    }
  }
`;

const PostItem = ({ postInfo }) => {
  const { image, categoryID, title, slug, createAt, userID } = postInfo;
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
  }, [categoryID, userID]);
  const date = new Date(createAt.seconds * 1000);
  const formDate = date.toLocaleDateString("vi-VI");
  if (!postInfo) return;
  return (
    <PostItemStyles>
      <div className="post-image">
        <PostImage to={"/" + slug} src={image}></PostImage>
      </div>
      <PostCategory style={{ marginBottom: "12px" }}>
        {category?.name}
      </PostCategory>
      <PostTitle to={"/" + slug} style={{ marginBottom: "12px" }} size="18px">
        {title}
      </PostTitle>
      <PostMeta
        author={author?.fullName}
        time={formDate}
        to={"/" + slugify(author?.fullName || "", { lower: true })}
      ></PostMeta>
    </PostItemStyles>
  );
};

export default PostItem;
