import logo from "./logo.svg";
import "./App.css";
import { AllContents } from "./styledComponent";
import { GlobalStyles } from "./styles";
import Header from "./Header";
import Nav from "./Nav";
import Content from "./Content";
function App() {
  return (
    <>
      <GlobalStyles />
      <AllContents>
        <Header></Header>
        <Nav></Nav>
        <Content></Content>
      </AllContents>
    </>
  );
}

export default App;
