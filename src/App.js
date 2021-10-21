import React from "react";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const AppWrap = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  body {
    // margin: 0;
    font-family: 'Apercu Arabic Pro', sans-serif;
    //padding: 0 15px;
    margin: 0 auto;
    // background: red;
    // position: relative;
     //overflow: hidden;
  }
  
  @font-face {
    font-family: 'Apercu Arabic Pro';
    src: url('./fonts/ApercuArabicPro-Regular.woff');
  }
  .wrapper {
    //background: red;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }
}
`;

function App() {
  return (
    <div className="wrapper">
      <AppWrap />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
