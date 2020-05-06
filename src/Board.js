import React from 'react';
import Field from './Field';

const Board = ({ board }) =>
  <div className="p-2 bg-green-300 grid grid-cols-8 grid-rows-8 row-gap-1 col-gap-1">
    {board.map(
      ({ row, column, isTargettable }) => <Field row={row} column={column} isTargettable={isTargettable} />
    )}
  </div >;

export default Board;
