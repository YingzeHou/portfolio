import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import Cover from "./components/cover/cover";
import { useState } from "react";

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
      </div>
    </div>
  );
}

export default App;
