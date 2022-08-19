import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import {
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostTitle,
  PostTitleDiv,
  PostWriteDiv,
  TitleInput,
  ContentsInput,
} from "./styledComponent";
import WriteTitle from "./WriteTitle";
import InputPost from "./InputPost";

const WritePost = () => {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });
  const { title, content } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const onSubmit = () => {
    axios
      .post("https://ac4d84b4-cff2-4fcf-a062-064035a1ab58.mock.pstmn.io/board/posting", {
        title: inputs.title,
        content: inputs.content,
        // repls: [],
      })
      .then(() => {
        navigate(..."/");
      });
  };
  const goPost = () => {
    navigate("/Board");
  };
  return (
    <PostSection>
      <WriteTitle />
      <PostWriteDiv>
        <InputPost
          onChange={onChange}
          title={title}
          content={content}
        ></InputPost>
      </PostWriteDiv>
      <PostSubmitDiv>
        <PostSubmit onClick={ () => {
    onSubmit()
    goPost()
  } }>작성완료</PostSubmit>
      </PostSubmitDiv>;
    </PostSection>
  );
};

export default WritePost;
