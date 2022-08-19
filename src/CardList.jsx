import React from 'react'
import {
    ContentDiv,
    MainSlide,
    Emoji,
    MovieTitle,
    MovieGrade,
    SubSlide,
    SubEmoji,
    SubSlideDiv,
    SubMovieTitle,
    SubMovieGrade,
    MainGlass,
  } from "./styledComponent";
  import play from "./img/play.png";
import dot from "./img/dot.png";
import stop from "./img/stop.png";
export default function CardList({title,vote,poster}) {
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
  return (
    
    <SubSlideDiv>
        <SubSlide>
          <div className="Slide">
            <SubMovieTitle>제목 : {title}</SubMovieTitle>
            <SubMovieGrade>평점 : ★ {vote}</SubMovieGrade>
            <img src={IMAGE_URL+poster} className="Subimg"></img>
            {/* <SubEmoji>
              <div className="Play">
                <img src={play}></img>
              </div>
              <div className="Dot">
                <img src={dot}></img>
                <img src={dot}></img>
                <img src={dot}></img>
              </div>
              <div className="Stop">
                <img src={stop}></img>
              </div>
            </SubEmoji> */}
          </div>
        </SubSlide>
    </SubSlideDiv>
  )
}
