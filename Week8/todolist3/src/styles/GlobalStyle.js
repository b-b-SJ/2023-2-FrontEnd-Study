import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Pretendard-Regular";
    margin: 0;
    background-color: #a3c6e6;

@font-face {
  font-family: "PyeongChangPeace-Bold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2")
    format("woff2");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "PyeongChang-Bold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChang-Bold.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
}

h1 {
  text-align : center;
  margin-bottom: 0;
  font-family: "PyeongChangPeace-Bold";
}

h2 {
  margin-left: 6%;
  margin-bottom: 0;
  font-size: 15pt;
  font-family: "PyeongChang-Bold";
}

h3 {
  text-align : center;
  margin-top : 0;
  margin-bottom: 0;
  font-family: "PyeongChangPeace-Bold";
  font-size: 10pt;
}


li {
    list-style: none;
    font-family: "PyeongChang-Bold";
}

button {
  margin-left: 10px;
  border-radius: 10px;
  border: 4px;
  font-size: 20px;
  cursor: pointer;
}

button:hover {
  cursor: pointer;
  color: white;
  background-color: #88b5dd;
}
`;

export default GlobalStyle;
