import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import Cover from "./components/cover/cover";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="section">
        <Cover/>
        <Intro/>
        <Portfolio/>
      </div>
    </div>
  );
}

export default App;
