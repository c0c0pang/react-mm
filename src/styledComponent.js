import styled from "styled-components";
import './font.css'
import { React } from 'react';

export const AllContents = styled.div`

    margin: 0 auto;
    padding: 5px;
    width: 1400px;
    min-height: 100vh;
    @media screen and (max-width: 1400px) {
    width: 100%;
    }
`;
export const HeaderDiv = styled.div`
  width: 1400px;
  height: auto;
  @media screen and (max-width: 1400px) {
    width: 100%;
  }
  /* background-color: blue; */

`;
export const Title = styled.h1`
    text-align: left;
    font-size: 50px;
    font-family: 'GmarketSansBold';
`;

export const Logout = styled.h4`
  font-size: 17px;
  margin: 0 ;
  padding: 0;
  text-align: right;
  font-family: 'NEXON Lv1 Gothic OTF Light';
  /* background-color: green; */
`;

export const NavDiv = styled.div`
  width: 100%;
  display: flex;
  font-size: 24px;
  justify-content: space-between;
  margin-top: 50px;
  /* background-color: gray; */
`;

export const H3 = styled.h3`
  padding: 10px;
  font-family: 'NEXON Lv1 Gothic OTF Light';
`;
export const ContentDiv = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  padding: 5px;
  width: 1300px;
  @media screen and (max-width: 1300px) {
  width: 100%;
  }
  background-color: whitesmoke;
`
export const MainSlide = styled.div`
position: relative;
 .Slide{
  max-height: 450px;
  
  overflow: hidden;
  
  img{
    width: 1300px;
    max-height: initial;
    margin-top: -15%;
  } 
 }
`;

export const Emoji = styled.div`
  position: absolute;
  top : 92%;
  right: 44%;
  display: flex;
  .Play{
    img{
    width: 30px;
  }
}
  .Dot{
    margin-top: 8px;
    margin-left: 10px;
    margin-right: 10px;
    img{
      
    margin-left: 5px;
    margin-right: 5px;
    width: 20px;
  }

}
  .Stop{
    img{
    width: 30px;
  }
  }

  
`;

export const MovieTitle = styled.h1`
position: absolute;
  text-align: left;
    font-size: 40px;
    font-family: 'GmarketSansBold';
    top:15%;
    left: 10%;
`;
export const MovieGrade = styled.h3`
  position: absolute;
  text-align: left;
  font-size: 30px;
  top:30%;
  left: 10%;
  font-family: 'GmarketSansBold';
`;

export const SubSlideDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`
export const SubSlide = styled.div`
  position: relative;
  
 .Slide{
  max-height: 250px;
  
  overflow: hidden;
  
  img{
    max-height: initial;
    margin-top: -15%;
  }
  .Subimg{
    height: 350px;
    width: 400px;
  } 
 }
`

export const SubEmoji = styled.div`
  position: absolute;
  top : 92%;
  right: 34%;
  display: flex;
  .Play{
    img{
    width: 20px;
  }
}
  .Dot{
    margin-top: 2px;
    margin-left: 10px;
    margin-right: 10px;
    img{
      
    margin-left: 5px;
    margin-right: 5px;
    width: 14px;
  }

}
  .Stop{
    img{
    width: 20px;
  }
  }

  
`;

export const SubMovieTitle = styled.h1`
position: absolute;
  text-align: left;
    font-size: 20px;
    font-family: 'GmarketSansBold';
    top:15%;
    left: 10%;
`;
export const SubMovieGrade = styled.h3`
  position: absolute;
  text-align: left;
  font-size: 15px;
  top:30%;
  left: 10%;
  font-family: 'GmarketSansBold';
`;