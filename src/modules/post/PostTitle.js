import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostTitleStyle = styled.h3`
  display: block;
  font-weight: 600;
  line-height: 1.5;
  font-size: ${(props) => props.size};
`;

const PostTitle = ({ size = "22px", style, to, children, ...props }) => {
  if (to)
    return (
      <Link to={to} className="link">
        <PostTitleStyle size={size} style={style} {...props}>
          {children}
        </PostTitleStyle>
      </Link>
    );
  return (
    <PostTitleStyle size={size} style={style} {...props}>
      {children}
    </PostTitleStyle>
  );
};

export default PostTitle;
