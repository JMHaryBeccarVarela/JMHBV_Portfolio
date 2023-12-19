function SquareGrid() {
  const gridSize = 10; // Tamaño de la cuadrícula (número de filas y columnas)

  const generateSquares = () => {
    const squares = [];
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        squares.push(
          <div
            className="absolute w-8 h-8 bg-gray-300 hover:bg-blue-500 transition duration-300"
            key={`${i}-${j}`}
          ></div>
        );
      }
    }
    return squares;
  };

  return <div className="grid grid-cols-10 gap-2">{generateSquares()}</div>;
}

export default SquareGrid;
