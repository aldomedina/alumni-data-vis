import { useState } from "react";
import About from "./components/About";
import Scene from "./components/Scene";
import UI from "./components/UI";

import "./styles/App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="wrapper">
      <div className="bg"></div>
      <div className="canvas">
        <Scene />
      </div>
      <UI openModal={() => setModalOpen(true)} />
      <About modalOpen={modalOpen} close={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
