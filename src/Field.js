import React from 'react';
import {
  arrows,
  bullet,
  CHOOSING_SOURCE,
  CHOOSING_TARGET,
  CHOOSING_ORIENTATION,
  AWAITING_CONFIRMATION,
} from './constants';
import { step, source, target, player, pyramids } from './state';
import Pyramid from './Pyramid';

const Field = ({ row, column, isTargettable }) => {
  const isEven = (column + row) % 2;
  const blackWhiteBgClass = isEven ? 'bg-gray-200' : 'bg-gray-400';

  let classes = `w-20 h-20 flex items-center justify-center ${blackWhiteBgClass} shadow`;

  if (step === CHOOSING_SOURCE) {
    // nothing special
  }

  if (step === CHOOSING_TARGET) {
    if (isTargettable) {
      classes = classes + `border-double border-2 border-orange-900 cursor-move`;
    } else {
      // nothing special
    }
  }

  if (step === CHOOSING_TARGET) {
    if (isTargettable) {
      classes = classes + `border-double border-2 border-orange-900 cursor-move`;
    } else {
      // nothing special
    }
  }

  if (step === CHOOSING_ORIENTATION) {
    const isTarget = target.row === row && target.column === column;

    if (isTarget) {
      const sourceFieldId = `${source.row}-${source.column}`;
      const { size: sourceSize } = pyramids[sourceFieldId] ?? {};
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
    } else {
      // nothing special
    }
  }

  if (step === AWAITING_CONFIRMATION) {
    const isTarget = target.row === row && target.column === column;
    if (isTarget) {
      classes = classes + `border-double border-4 border-orange-900 cursor-move`;
    } else {
      // nothing special
    }
  }




  const fieldId = `${row}-${column}`;
  const isSource = source.row === row && source.column === column;
  const { color, size, direction } = pyramids[fieldId] ?? {};
  const isSourceable = player === color;

  return <div id={`field-${fieldId}`} key={fieldId} className={`${classes}`}>
    {pyramids[fieldId] && <Pyramid isSourceable={isSourceable} isSource={isSource} color={color} size={size} direction={direction} />}
  </div>;
}

export default Field;
