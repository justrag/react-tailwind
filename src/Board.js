import React from 'react';
import Field from './Field';

const Board = ({ board }) =>
  <div className="p-2 bg-an-maize grid grid-cols-8 grid-rows-8 row-gap-1 col-gap-1">
    {board.map(
      ({ row, column, isTargettable, isOnPath }) => <Field key={`${row}-${column}`} row={row} column={column} isTargettable={isTargettable} isOnPath={isOnPath} />
    )}
  </div >;

export default Board;
