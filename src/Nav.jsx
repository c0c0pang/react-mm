import React from "react";
import { NavDiv, H3 } from "./styledComponent";
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <NavDiv>
      <H3>자유 게시판</H3>
      
      <Link to='/Board' style={{ textDecoration: 'none' ,color:'black'}}><H3>모임 게시판</H3></Link> 
      
      <H3>영화 평론 게시판</H3>
    </NavDiv>
  );
}
export default Nav;
