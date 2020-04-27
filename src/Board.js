import React from 'react';

const Board = ({ board, pyramids }) =>
  <div className="p-2 bg-orange-500 grid grid-cols-8 gap-1">
    {board.map(({ row, column }) => {
      const isEven = (column + row) % 2 ? 'bg-green-400' : 'bg-purple-400';
      const fieldId = `${row}-${column}`;
      console.log({ fieldId, pyramids });
      const { color, size, direction } = pyramids[fieldId] || {};
      return <div key={fieldId} className={`text-center ${isEven}`}>{color}-{size}-{direction}</div>
    })}

  </div>;

export default Board;
