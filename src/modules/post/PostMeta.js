import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostMetaStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.color || props.theme.gray6B};
  .post-dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: currentColor;
    border-radius: 100rem;
  }
`;

const PostMeta = ({
  time = "Mar 23",
  author = "Andiez Le",
  color,
  to = "",
  ...props
}) => {
  return (
    <PostMetaStyle color={color} {...props}>
      <span className="post-time">{time}</span>
      <span className="post-dot"></span>
      <Link to={to}>
        <span className="post-author">{author}</span>
      </Link>
    </PostMetaStyle>
  );
};

export default PostMeta;
