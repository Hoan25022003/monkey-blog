import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Heading from "../components/layout/Heading";
import Layout from "../components/layout/Layout";
import { db } from "../firebases/firebaseConfig";
import parse from "html-react-parser";
import useFetchData from "../hooks/useFetchData";
import PostCategory from "../modules/post/PostCategory";
import PostImage from "../modules/post/PostImage";
import PostItem from "../modules/post/PostItem";
import PostMeta from "../modules/post/PostMeta";
import PostTitle from "../modules/post/PostTitle";

const PostDetailsPageStyles = styled.div`
  padding-bottom: 100px;
  .post {
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 40px;
      margin: 40px 0;
    }
    &-feature {
      flex: 1;
      height: 466px;
      width: 466px;
      object-fit: cover;
      border-radius: 20px;
    }
    &-heading {
      font-weight: bold;
      font-size: 36px;
      margin-bottom: 16px;
    }
    &-info {
      flex: 1;
    }
    &-content {
      max-width: 700px;
      margin: 50px auto;
      h2 {
        font-size: 22px;
        font-weight: 600;
        margin-top: 30px;
      }
      p {
        font-size: 16px;
        line-height: 32px;
        margin: 10px 0 20px;
      }
    }
  }
  .author {
    margin-top: 40px;
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    padding: 20px;
    background-color: ${(props) => props.theme.grayF3};
    &-image {
      width: 200px;
      height: 200px;
      flex-shrink: 0;
      border-radius: inherit;
    }
    &-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
    &-content {
      flex: 1;
      padding-left: 20px;
    }
    &-name {
      font-weight: bold;
      font-size: 20px;
      margin-top: 20px;
    }
    &-desc {
      font-size: 14px;
      line-height: 2;
    }
  }
  @media screen and (max-width: 1023.98px) {
    padding-bottom: 40px;
    .post {
      &-header {
        flex-direction: column;
      }
      &-feature {
        height: auto;
      }
      &-heading {
        font-size: 26px;
      }
      &-content {
        margin: 40px 0;
      }
    }
    .author {
      flex-direction: column;
      &-image {
        width: 100%;
        height: auto;
      }
    }
  }
`;

const PostDetailsPage = () => {
  const { postSlug } = useParams();
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
    async function getData() {
      const colRef = collection(db, "posts");
      const q = query(colRef, where("slug", "==", postSlug));
      const querySnapshot = await getDocs(q);
      let result = [];
      querySnapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(result);
    }
    getData();
  }, [postSlug]);
  const [postContent, setPostContent] = React.useState({});
  const [category, setCategory] = React.useState({});
  const [author, setAuthor] = React.useState({});
  React.useEffect(() => {
    if (!posts) return;
    document.title = posts[0]?.title || "This page is invalid";
    setPostContent(posts[0]);
    async function getCategory() {
      const docRef = doc(db, "category", posts[0]?.categoryID);
      const docSnap = await getDoc(docRef);
      setCategory(docSnap.data());
    }
    async function getAuthor() {
      const docRef = doc(db, "users", posts[0]?.userID);
      const docSnap = await getDoc(docRef);
      setAuthor(docSnap.data());
    }
    getCategory();
    getAuthor();
  }, [posts]);
  if (!postSlug || !postContent) return;
  const { title, createAt, image, content, categoryID } = postContent;
  const date = new Date(createAt?.seconds * 1000);
  return (
    <PostDetailsPageStyles>
      <Layout>
        <div className="container">
          <div className="post-header">
            <PostImage src={image} className="post-feature"></PostImage>
            <div className="post-info">
              <PostCategory to={"/" + category.slug} className="mb-6">
                {category.name}
              </PostCategory>
              <PostTitle className="post-heading">{title}</PostTitle>
              <PostMeta
                time={date.toLocaleDateString("vi-VI")}
                author={author.fullName}
              ></PostMeta>
            </div>
          </div>
          <div className="post-content">
            <div className="entry-content">{parse(content || "")}</div>
            <div className="author">
              <div className="author-image">
                <img src={author?.avatar} alt="" />
              </div>
              <div className="author-content">
                <h3 className="author-name">{author?.fullName}</h3>
                <p className="author-desc">
                  {author?.desc ||
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum rem consequatur ex nisi nihil tenetur! Cupiditate, doloribus aut. Unde quisquam velit voluptas vel officiis, sint magni aspernatur eos nisi dolorum."}
                </p>
              </div>
            </div>
          </div>
          <PostRelate categoryID={categoryID} postSlug={postSlug}></PostRelate>
        </div>
      </Layout>
    </PostDetailsPageStyles>
  );
};

const PostRelate = ({ categoryID, postSlug }) => {
  let { data: listPostRelate } = useFetchData("posts", [
    where("categoryID", "==", categoryID),
    where("status", "==", 1),
  ]);
  listPostRelate = listPostRelate.filter((item) => item.slug !== postSlug);
  if (!listPostRelate || listPostRelate.length === 0) return;
  return (
    <div className="post-related">
      <Heading>Bài viết liên quan</Heading>
      <div className="grid grid-cols-4 gap-8">
        {listPostRelate.map((post) => (
          <PostItem key={post.id} postInfo={post}></PostItem>
        ))}
      </div>
    </div>
  );
};

export default PostDetailsPage;
