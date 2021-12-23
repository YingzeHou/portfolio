import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import Cover from "./components/cover/cover";
import { useState } from "react";
import Experience from "./components/experience/experience";
import Skill from "./components/skill/skill";

function App() {
  const [QRopen, setQRopen] = useState(false)
  const [contentChange, setContentChange] = useState(false);
  return (
    <div className="app">
      <Topbar/>
      <div className="section">
        <Cover QRopen={QRopen} setQRopen={setQRopen}/>
        <Intro/>
        <Portfolio/>
        <Experience/>
        <Skill/>
      </div>
    </div>
  );
}

export default App;
