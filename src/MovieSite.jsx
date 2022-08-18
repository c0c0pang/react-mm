import React from "react";
import { Site } from "./styledComponent";
function MovieSite() {
  return (
    <Site>
      <a href="https://www.cgv.co.kr/" target="blank">
        <div className="CGV" id="Box">
          CGV
        </div>
      </a>
      <a href="https://www.lottecinema.co.kr/NLCHS" target="blank">
        <div className="LOTTE" id="Box">
          롯데시네마
        </div>
      </a>
      <a href="https://www.megabox.co.kr/" target="blank">
        <div className="MEGA" id="Box">
          메가박스
        </div>
      </a>
    </Site>
  );
}
export default MovieSite;
