import React from 'react';
import Pyramid from './Pyramid';

const Board = ({ board, pyramids }) =>
  <div className="p-2 bg-green-300 grid grid-cols-8 grid-rows-8 row-gap-1 col-gap-1">
    {board.map(({ row, column }) => {
      const isEven = (column + row) % 2 ? 'bg-gray-200' : 'bg-gray-400';
      const fieldId = `${row}-${column}`;
      return <div key={fieldId} className={`flex items-center justify-center w-20 h-20 ${isEven} shadow`}>
        {pyramids[fieldId] && <Pyramid {...pyramids[fieldId]} />}
      </div>;
    }
    )}
  </div>;

export default Board;
