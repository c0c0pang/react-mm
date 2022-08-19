import React from "react";
import { PostList, EachPostLi } from "./styledComponent";
import { useNavigate } from "react-router-dom";
function EachPost({ postID, title }) {
  const navigate = useNavigate();
  const goPost = () => {
    navigate(`${"/post/" + postID}`);
  };
  return (
    <EachPostLi onClick={goPost}>
      <PostList>
        {postID} {title}
      </PostList>
    </EachPostLi>
  );
}
export default EachPost;
