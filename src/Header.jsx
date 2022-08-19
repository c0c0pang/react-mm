import React from "react";
import { HeaderDiv, Title, Logout } from "./styledComponent";
import { Link } from "react-router-dom";
function Header() {
  return (
    <HeaderDiv>
      <Title>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          MM!
        </Link>
        <Logout>로그아웃</Logout>
      </Title>
    </HeaderDiv>
  );
}
export default Header;
