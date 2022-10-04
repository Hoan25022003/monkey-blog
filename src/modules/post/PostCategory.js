import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostCategoryStyle = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 10px;
  color: #6b6b6b;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  background-color: ${(props) => props.bgColor || props.theme.grayF3}; ;
`;

const PostCategory = ({ bgColor, style, to, children, ...props }) => {
  if (to)
    return (
      <Link to={to} className="link">
        <PostCategoryStyle bgColor={bgColor} style={style} {...props}>
          {children}
        </PostCategoryStyle>
      </Link>
    );
  return (
    <PostCategoryStyle bgColor={bgColor} style={style} {...props}>
      {children}
    </PostCategoryStyle>
  );
};

export default PostCategory;
