import React from 'react';
import { arrows, bullet } from './constants';
import Pyramid from './Pyramid';

const Board = ({ player, source, target, board, pyramids }) =>
  <div className="p-2 bg-green-300 grid grid-cols-8 grid-rows-8 row-gap-1 col-gap-1">
    {board.map(({ row, column, isTargettable }) => {
      const isEven = (column + row) % 2
      const bgClass = isEven ? 'bg-gray-200' : 'bg-gray-400';
      const borderClass = isTargettable ? 'border-double border-4 border-orange-900' : '';
      const cursorClass = isTargettable ? 'cursor-move' : '';
      const fieldId = `${row}-${column}`;
      const isSource = source.row === row && source.column === column;
      const { color, size, direction } = pyramids[fieldId] ?? {};
      const isSourceable = player === color && !isSource;
      const isTarget = target.row === row && target.column === column;
      const sourceFieldId = `${source.row}-${source.column}`;
      const { size: sourceSize } = pyramids[sourceFieldId] ?? {};

      if (isTarget) {
        const sourcePyramid = arrows[sourceSize];
        return <div className="grid grid-cols-3 grid-rows-3">
          <span className="transform -rotate-45">{sourcePyramid}</span>
          <span>{sourcePyramid}</span>
          <span className="transform rotate-45">{sourcePyramid}</span>
          <span className="transform -rotate-90">{sourcePyramid}</span>
          <span>{bullet}</span>
          <span className="transform rotate-90">{sourcePyramid}</span>
          <span className="transform -rotate-135">{sourcePyramid}</span>
          <span className="transform rotate-180">{sourcePyramid}</span>
          <span className="transform rotate-135">{sourcePyramid}</span>
        </div>;
      }
      return <div
        id={`field-${fieldId}`}
        key={fieldId}
        className={`flex items-center justify-center w-20 h-20 ${bgClass} ${borderClass} ${cursorClass} shadow`}
      >
        {pyramids[fieldId] && <Pyramid isSourceable={isSourceable} isSource={isSource} color={color} size={size} direction={direction} />}
      </div>;
    }
    )}
  </div>;

export default Board;
