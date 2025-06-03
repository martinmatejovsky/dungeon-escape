import '../styles/GridTiles.scss';

export default function GridTile () {
  const gridSize = 4;
  const gameGrid: Boolean[][] = Array.from({ length: gridSize }, () => Array(gridSize).fill(true));

  return (
    <div className="grid-tile">
      {gameGrid.map(row => {
        return (
            <div className={"tile-row"}>
              {row.map(column => {
                return (
                    <div className={column ? "tile active" : "tile"}></div>
                )
              })}
            </div>
        )
      } )}
    </div>
  );
};