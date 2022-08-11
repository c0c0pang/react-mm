import styled from "styled-components";

export const AllContents = styled.div`
    margin: 0 auto;
    padding: 0;
    width: 1400px;
    min-height: 100vh;
    @media screen and (max-width: 1400px) {
    width: 100%;
    }
    
`;
export const HeaderDiv = styled.div`
  width: 1400px;
  height: auto;
  flex-direction: row;
  align-items: center;
  font-family: 'GmarketSansBold';
  position: absolute;
  @media screen and (max-width: 1400px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
    text-align: center;
    font-size: 60px;
`