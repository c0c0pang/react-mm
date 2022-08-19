import React, { useEffect, useState, useMemo, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  PostSection,
  PostTitleDiv,
  PostTitle,
  LoadingDiv,
  LoadingImg,
  PagenumberDiv,
  CursorDiv,
  PostRepl,
  PostReplDiv,
  ReplTitleDiv,
  ReplWriter,
  Repl,
  WriterDiv,
  ReplInput,
  ReplSubmitDiv,
} from "./styledComponent";

const replData = [
  { id: 2, content: `반가워요!` },
  { id: 3, content: `멋쟁이 사자처럼 최고!` },
];

function ShowPost() {
  const [post, setPost] = useState(null);
  const [repls, setRepls] = useState([]);

  const Params = useParams();
  const replInput = useRef();
  const PostAndRepl = React.memo(({ post, repls }) => {
    return (
      <>
        <PostTitleDiv>
          <PostTitle>{post && post.title}</PostTitle>
        </PostTitleDiv>
        repls.map((element) => (
        <PostReplDiv key={element.id}>
          <ReplWriter>익명</ReplWriter>
          <Repl>{element.content}</Repl>
        </PostReplDiv>
        ))
      </>
    );
  });
  useEffect(() => {
    axios
      .get(
        `https://ac4d84b4-cff2-4fcf-a062-064035a1ab58.mock.pstmn.io/board/posting/${Params.postID}`
      )
      .then((response) => {
        setPost(response.data);
        // setRepls(response.data.repls);
        replInput.current.focus();
      });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setRepls(replData);
      replInput.current.focus();
    }, 300);
  });

  const [repl, setRepl] = useState("");
  const onChange = (e) => {
    setRepl(e.target.value);
  };
  return (
    <div>
      <PostSection>
        <PostAndRepl post={post} repls={repls} />
        <WriterDiv>
          <ReplInput ref={replInput} onChange={onChange}></ReplInput>
          <ReplSubmitDiv>
            <span>입력</span>
          </ReplSubmitDiv>
        </WriterDiv>
      </PostSection>
    </div>
  );
}

export default ShowPost;
