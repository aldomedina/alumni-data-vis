import { useEffect, useState } from "react";
import Scene from "./components/Scene";

import "./App.css";
import UI from "./components/UI";
import useStore from "./store/app";
import createRandomData from "./placeholders/createRandomData";

function App() {
  const setData = useStore((s) => s.setData);

  useEffect(() => {
    const data = createRandomData(400);

    setData(data);
  }, []);

  return (
    <div className="wrapper">
      <Scene />
      <UI />
    </div>
  );
}

export default App;
