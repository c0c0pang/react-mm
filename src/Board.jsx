import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { BoardDiv, BoardSection } from "./styledComponent";
import EachPost from "./EachPost";
function Board() {
  const [page, setPage] = useState(1);
  // const [pages, setPages] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState([]);
  const getPostList = useCallback(() => {
    axios
      .get(
        "https://ac4d84b4-cff2-4fcf-a062-064035a1ab58.mock.pstmn.io/board/postings"
      )
      .then((response) => {
        console.log(response.data);

        // const lataPage = Math.ceil(response.data.count / 10);
        // const tempPages = [];
        // for (let i = 1; i <= lataPage; i++) {
        //   tempPages.push(i);
        // }
        setPostList(response.data);
      });
  });
  useEffect(getPostList, [page]);
  return (
    <BoardSection>
      <BoardDiv>
        <ul>
          {postList.map((element) => (
            <EachPost
              key={element.id}
              title={element.title}
              postID={element.id}
            />
          ))}
        </ul>
      </BoardDiv>
    </BoardSection>
  );
}
export default Board;
