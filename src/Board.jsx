import React from 'react'
import {BoardDiv }from './styledComponent'
 function Board() {
  return (
    <>
    <BoardDiv>
        <div className='box'>
        <td width="42%" align="left">번호</td>
        <td width="10%" align="center">제목 </td>
        <td width="20%" align="center">작성자</td>
        <td width="8%" align="center">날짜</td>
        <br></br>
        <td width="42%" align="left">번호</td>
        <td width="10%" align="center">제목 </td>
        <td width="20%" align="center">작성자</td>
        <td width="8%" align="center">날짜</td>
        <br></br>
        <td width="42%" align="left">번호</td>
        <td width="10%" align="center">제목 </td>
        <td width="20%" align="center">작성자</td>
        <td width="8%" align="center">날짜</td>
        <br></br>
        <td width="42%" align="left">번호</td>
        <td width="10%" align="center">제목 </td>
        <td width="20%" align="center">작성자</td>
        <td width="8%" align="center">날짜</td>
        </div>
    </BoardDiv>
    </>
  );
}
export default Board;