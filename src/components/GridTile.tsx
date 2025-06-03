import "../styles/GridTiles.scss";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  setGameState: Dispatch<SetStateAction<boolean>>;
};
type GameGrid = Boolean[][];

export default function GridTile({ setGameState }: Props) {
  const gridSize = 5;
  const emptyGrid: GameGrid = Array.from({ length: gridSize }, () =>
    Array(gridSize).fill(true),
  );
  const [gridPrepared, setGridPrepared] = useState(false);

  // STATE
  const [gameGrid, setGameGrid] = useState(emptyGrid);

  // EFFECTS
  useEffect(() => {
    if (!gridPrepared) return;
    setGameState(evaluateWinningCondition());
  }, [gameGrid]);

  // shuffle grid randomly
  useEffect(() => {
    shuffleGrid();
    // TODO
    if (evaluateWinningCondition()) console.log("should shuffle one more time");
    setGridPrepared(true);
  }, []);

  // HANDLERS
  const handleTileClick = (
    grid: GameGrid,
    rowIndex: number,
    columnIndex: number,
  ) => {
    const toggle = (row: number, col: number) => {
      if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
        grid[row][col] = !grid[row][col];
      }
    };
    toggle(rowIndex, columnIndex);
    toggle(rowIndex - 1, columnIndex);
    toggle(rowIndex + 1, columnIndex);
    toggle(rowIndex, columnIndex - 1);
    toggle(rowIndex, columnIndex + 1);

    console.log("set grid");
    return grid;
  };

  // METHODS
  const shuffleGrid = () => {
    const gridCopy = structuredClone(emptyGrid);

    for (let i = 0; i < gridSize; i++) {
      const randomRow = Math.floor(Math.random() * gridSize);
      const randomColumn = Math.floor(Math.random() * gridSize);

      handleTileClick(gridCopy, randomRow, randomColumn);
    }

    setGameGrid(gridCopy);
  };

  const evaluateWinningCondition = () => {
    const firstTileState: Boolean = gameGrid[0][0];
    for (const row of gameGrid) {
      if (row.findIndex((cell) => cell !== firstTileState) >= 0) {
        return false;
      }
    }

    return true;
  };

  return (
    <div className="grid-tile">
      {gameGrid.map((row, rowIndex) => {
        return (
          <div className={"tile-row"} key={rowIndex}>
            {row.map((cell, columnIndex) => {
              return (
                <div
                  className={cell ? "tile is-active" : "tile"}
                  key={columnIndex}
                  onClick={() =>
                    setGameGrid(
                      handleTileClick(gameGrid, rowIndex, columnIndex),
                    )
                  }
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
