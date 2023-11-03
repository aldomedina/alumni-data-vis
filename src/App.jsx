import Scene from "./components/Scene";
import UI from "./components/UI";

import "./styles/App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="bg"></div>
      <div className="canvas">
        <Scene />
      </div>
      <UI />
    </div>
  );
}

export default App;
