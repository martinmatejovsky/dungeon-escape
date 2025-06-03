import "../styles/GridTiles.scss";
import { useState } from "react";

type GameGrid = Boolean[][];

export default function GridTile() {
  const gridSize = 4;
  const emptyGrid: GameGrid = Array.from({ length: gridSize }, () =>
    Array(gridSize).fill(true),
  );

  // STATE
  const [gameGrid, setGameGrid] = useState(emptyGrid);

  // HANDLERS
  const handleTileClick = (rowIndex: number, columnIndex: number) => {
    const newGrid = structuredClone(gameGrid);

    const toggle = (row: number, col: number) => {
      if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
        newGrid[row][col] = !newGrid[row][col];
      }
    };
    toggle(rowIndex, columnIndex);
    toggle(rowIndex - 1, columnIndex);
    toggle(rowIndex + 1, columnIndex);
    toggle(rowIndex, columnIndex - 1);
    toggle(rowIndex, columnIndex + 1);
    setGameGrid(newGrid);
  };

  return (
    <div className="grid-tile">
      {gameGrid.map((row, rowIndex) => {
        return (
          <div className={"tile-row"}>
            {row.map((cell, columnIndex) => {
              return (
                <div
                  className={cell ? "tile is-active" : "tile"}
                  onClick={() => handleTileClick(rowIndex, columnIndex)}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
