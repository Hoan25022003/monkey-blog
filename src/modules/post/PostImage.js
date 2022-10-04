import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostImageStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

const PostImage = ({ src, to = null, ...props }) => {
  if (to) {
    return (
      <Link to={to}>
        <PostImageStyle src={src} alt="unsplash" {...props} />
      </Link>
    );
  }
  return <PostImageStyle src={src} alt="unsplash" {...props} />;
};

export default PostImage;
