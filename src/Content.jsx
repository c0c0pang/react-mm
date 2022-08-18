import React from "react";
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
import 토르 from "./img/토르.jpg";
import 탑건 from "./img/탑건.jpg";
import 쥬라기 from "./img/쥬라기.jpg";
import 미니언즈 from "./img/미니언즈.jpg";
import play from "./img/play.png";
import dot from "./img/dot.png";
import stop from "./img/stop.png";
export default function Content() {
  return (
    <ContentDiv>
      <MainSlide>
        <div className="Slide">
          <MovieTitle>제목 : </MovieTitle>
          <MovieGrade>평점 : ★ </MovieGrade>
          <img src={토르}></img>
          <Emoji>
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
          </Emoji>
        </div>
      </MainSlide>

      <SubSlideDiv>
        <SubSlide>
          <div className="Slide">
            <SubMovieTitle>제목 : </SubMovieTitle>
            <SubMovieGrade>평점 : ★ </SubMovieGrade>
            <img src={탑건} className="Subimg"></img>
            <SubEmoji>
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
            </SubEmoji>
          </div>
        </SubSlide>

        <SubSlide>
          <div className="Slide">
            <SubMovieTitle>제목 : </SubMovieTitle>
            <SubMovieGrade>평점 : ★ </SubMovieGrade>
            <img src={미니언즈} className="Subimg"></img>
            <SubEmoji>
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
            </SubEmoji>
          </div>
        </SubSlide>

        <SubSlide>
          <div className="Slide">
            <SubMovieTitle>제목 : </SubMovieTitle>
            <SubMovieGrade>평점 : ★ </SubMovieGrade>
            <img src={쥬라기} className="Subimg"></img>
            <SubEmoji>
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
            </SubEmoji>
          </div>
        </SubSlide>
      </SubSlideDiv>
    </ContentDiv>
  );
}
