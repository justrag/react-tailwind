import React from 'react';

const Board = ({ board, pyramids }) => <div className="grid grid-cols-8">
  {board.map(({ row, column }) => {
    const isEven = (column + row) % 2 ? 'bg-green-400' : 'bg-purple-400';
    const id = `${row}-${column}`;
    return <div key={id} className={`text-center ${isEven}`}>{id}</div>
  })}

</div>;

export default Board;
