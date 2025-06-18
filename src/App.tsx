import "./styles/elements.css";
import "./styles/App.scss";
import GridTile from "./components/GridTile";
import { useEffect, useState } from "react";
import MotivationLetter from "./components/MotivationLetter";

function App() {
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    const overlay = document.getElementById("darkness-overlay");

    if (overlay) {
      document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;
        overlay.style.setProperty("--x", `${x}px`);
        overlay.style.setProperty("--y", `${y}px`);
      });
    }
  }, []);

  return (
    <div className="App">
      <div id="darkness-overlay"></div>

      <div className={gameWon ? "exit-door is-opened" : "exit-door"}>
        <MotivationLetter />

        <GridTile setGameState={setGameWon} />
      </div>
    </div>
  );
}

export default App;
