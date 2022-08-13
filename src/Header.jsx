import React from "react";
import { HeaderDiv, Title, Logout } from "./styledComponent";
function Header() {
  return (
    <HeaderDiv>
      <Title>
        MM!
        <Logout>로그아웃</Logout>
      </Title>
    </HeaderDiv>
  );
}
export default Header;
