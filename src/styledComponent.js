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
  color: white;
  
`
export const MainSlide = styled.div`
  position: relative;

 .Slide{
  max-height: 450px;
  box-shadow:  0 0 1rem 0 rgba(0,0,0,.3);
  border-radius: 5px;
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
  box-shadow:  0 0 1rem 0 rgba(0,0,0,.3);
  border-radius: 5px;
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
  top : 90%;
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

export const Site = styled.div`
  display: flex;
  justify-content : center;
  align-items : center;
  .CGV{

    background-color: #D32E2E;
  }
  .MEGA{

    background-color: #0094FF;

  }
  .LOTTE{

    background-color: #FFC700;
    

  }
  #Box{
    display: flex;
    justify-content : center;
    align-items : center;
    width: 120px;
    height: 87px;
    border-radius:10px;
    font-size: 23px;
    font-family: 'GmarketSansBold';
  }
  a{
    display: flex;
    text-decoration-line: none;
    color: black;
    text-align: center;
    margin: 20px;
  }
`;

export const FooterDiv = styled.div`
  margin-top: 30px;
  border-top: 2px solid whitesmoke;
  h4{
    margin-top: 10px;
    font-family: 'NEXON Lv1 Gothic OTF Light';
  }
  h2{
    margin-top: 10px;
    margin-right: 10px;
    
    font-family: "GmarketSansBold";
  }
`;