import "./App.css";
import GridTile from "./components/GridTile";
import { useState } from "react";

function App() {
  const [gameWon, setGameWon] = useState(false);

  return (
    <div className="App">
      {gameWon && <h2>WON!</h2>}

      <GridTile setGameState={setGameWon} />
    </div>
  );
}

export default App;
