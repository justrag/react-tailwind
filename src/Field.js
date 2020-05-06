import React from 'react';
import { arrows, bullet } from './constants';
import { source, target, player, pyramids } from './state';
import Pyramid from './Pyramid';

const Field = ({ row, column, isTargettable }) => {
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
    return <div className={`w-20 h-20 bg-orange-300 border-double border-4 border-orange-900 grid grid-cols-3 grid-rows-3`}>
      <div className="flex items-center justify-center cursor-pointer hover:text-red-500"><span className="transform -rotate-45">{sourcePyramid}</span></div>
      <div className="flex items-center justify-center cursor-pointer hover:text-red-500"><span>{sourcePyramid}</span></div>
      <div className="flex items-center justify-center cursor-pointer hover:text-red-500"><span className="transform rotate-45">{sourcePyramid}</span></div>
      <div className="flex items-center justify-center cursor-pointer hover:text-red-500"><span className="transform -rotate-90">{sourcePyramid}</span></div >
      <div className="flex items-center justify-center cursor-pointer hover:text-red-500"><span>{bullet}</span></div >
      <div className="flex items-center justify-center cursor-pointer hover:text-red-500"><span className="transform rotate-90">{sourcePyramid}</span></div >
      <div className="flex items-center justify-center cursor-pointer hover:text-red-500"><span className="transform -rotate-135">{sourcePyramid}</span></div >
      <div className="flex items-center justify-center cursor-pointer hover:text-red-500"><span className="transform rotate-180">{sourcePyramid}</span></div >
      <div className="flex items-center justify-center cursor-pointer hover:text-red-500"><span className="transform rotate-135">{sourcePyramid}</span></div >
    </div >;
  }
  return <div
    id={`field-${fieldId}`}
    key={fieldId}
    className={`flex items-center justify-center w-20 h-20 ${bgClass} ${borderClass} ${cursorClass} shadow`}
  >
    {pyramids[fieldId] && <Pyramid isSourceable={isSourceable} isSource={isSource} color={color} size={size} direction={direction} />}
  </div>;
}

export default Field;
