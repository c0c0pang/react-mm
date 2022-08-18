import logo from "./logo.svg";
import "./App.css";
import { AllContents } from "./styledComponent";
import { GlobalStyles } from "./styles";
import Header from "./Header";
import Nav from "./Nav";
import Content from "./Content";
import MovieSite from "./MovieSite";
import Footer from "./Footer";
import Board from "./Board"
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <GlobalStyles />
      <AllContents>
        <Header></Header>
        <Nav></Nav>
        {/* <Content></Content> */}
        <Routes>
            <Route path="/" element={<Content />}></Route>
            <Route path="/Board" element={<Board />}></Route>
          </Routes>
        <MovieSite></MovieSite>
        <Footer></Footer>
      </AllContents>
    </>
  );
}

export default App;
