import React,{useState,useCallback,useEffect} from "react";
import axios from "axios";
import Slider from "react-slick";
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
  PagingSection,
  PagenumberDiv,

} from "./styledComponent";
import 토르 from "./img/토르.jpg";
import 탑건 from "./img/탑건.jpg";
import 쥬라기 from "./img/쥬라기.jpg";
import 미니언즈 from "./img/미니언즈.jpg";
import play from "./img/play.png";
import dot from "./img/dot.png";
import stop from "./img/stop.png";
import {
  faArrowsRotate,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
  
} from "@fortawesome/free-solid-svg-icons";
import CardList from "./CardList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Content() {
  const APIKEY = "bc44002962513d9b01bc57ea2304acc7";
console.log(APIKEY);
const [pages, setPages] = useState([]);
const now_playingURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + APIKEY + "&language=en-US&page=1";
const [postList, setPostList] = useState([]);
// const get_now = useCallback(() => {
//   axios
//       .get(
//         now_playingURL
//       )
//       .then((response) => {
//           // console.log(response.data.results);
//           const lataPage = Math.ceil(response.data.results.length / 6);
//           const tempPages = [];
//           for (let i = 1; i <= lataPage; i++) {
//             tempPages.push(i);
//           }
//           setPages(tempPages);
//           setPostList(response.data.results);
          
          
//       });
// });
// useEffect(get_now, []);

useEffect(() => {
  axios.get(now_playingURL+"&page_size=6").then((response) => {
    const lataPage = Math.ceil(response.data.results.length / 6);
    const tempPages = [];
    for (let i = 1; i <= lataPage; i++) {
      tempPages.push(i);
    }
    setPages(tempPages);
    setPostList(response.data.results);
  });
}, []);




  return (
    <>
    <ContentDiv>
      <MainSlide>
      {postList.map((element) => (
                        <CardList
                            title={element.title}
                            vote={element.vote_average}
                            poster={element.poster_path}
                        />
      ))}
      
        {/* <div className="Slide">
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
        </div> */}
      </MainSlide>

      {/* <SubSlideDiv>
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
        </SubSlide> */}

        {/* <SubSlide>
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
        </SubSlide> */}

        {/* <SubSlide>
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
      </SubSlideDiv> */}
      
    </ContentDiv>
    <PagingSection>
    <PagenumberDiv>
      <FontAwesomeIcon icon={faArrowLeft} />
    </PagenumberDiv>
    <PagenumberDiv>
      {pages.map((pageNum) => (
        <PagenumberDiv key={pageNum}>{pageNum}</PagenumberDiv>
      ))}
    </PagenumberDiv>
    <PagenumberDiv>
      <FontAwesomeIcon icon={faArrowRight} />
    </PagenumberDiv>
  </PagingSection>
  </>
  );
}
export default Content;