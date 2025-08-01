import "../styles/GridTiles.scss";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GameGrid } from "../utils/types";

type Props = {
  setGameState: Dispatch<SetStateAction<boolean>>;
};
const gridSize = 4;

export default function GridTile({ setGameState }: Props) {
  // HELPERS
  const createEmptyGrid = (): GameGrid =>
    Array.from({ length: gridSize }, () => Array(gridSize).fill(true));

  const handleTileClick = (
    grid: GameGrid,
    rowIndex: number,
    columnIndex: number,
  ) => {
    const newGrid = structuredClone(grid);
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

    return newGrid;
  };

  // METHODS
  const evaluateWinningCondition = (evaluatedGrid: GameGrid) => {
    const firstTileState: Boolean = evaluatedGrid[0][0];
    for (const row of evaluatedGrid) {
      if (row.findIndex((cell) => cell !== firstTileState) >= 0) {
        return false;
      }
    }

    return true;
  };

  // This serves as a solution to the fact that not all random color setups are solvable
  const createShuffledGrid = (): GameGrid => {
    let newGrid = createEmptyGrid();

    do {
      for (let i = 0; i < gridSize; i++) {
        const randomRow = Math.floor(Math.random() * gridSize);
        const randomColumn = Math.floor(Math.random() * gridSize);

        newGrid = handleTileClick(newGrid, randomRow, randomColumn);
      }
    } while (evaluateWinningCondition(newGrid));

    return newGrid;
  };

  // STATE
  const [gameGrid, setGameGrid] = useState<GameGrid>(createShuffledGrid);

  // EFFECTS
  useEffect(() => {
    setGameState(evaluateWinningCondition(gameGrid));
  }, [setGameState, gameGrid]);

  // METHODS
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
