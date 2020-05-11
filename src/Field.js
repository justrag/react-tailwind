import React from 'react';
import {
  arrows,
  bullet,
  CHOOSING_SOURCE,
  CHOOSING_TARGET,
  CHOOSING_ORIENTATION,
  AWAITING_CONFIRMATION,
} from './constants';
import { step, source, target, orientation, player, pyramids } from './state';
import Pyramid from './Pyramid';

const Orientation = ({ children }) => <div className="flex items-center justify-center cursor-pointer hover:text-an-orange">{children}</div>

const Field = ({ row, column, isTargettable, isOnPath }) => {
  const isEven = (column + row) % 2;
  const checkerboardClass = isEven ? 'bg-an-light-green' : 'bg-an-light-brown';
  const middleCheckerboardClass = isEven ? 'bg-an-medium-green' : 'bg-an-medium-brown';
  const isSource = source?.row === row && source?.column === column;
  const isTarget = target?.row === row && target?.column === column;

  let classes = `w-20 h-20 flex items-center justify-center ${checkerboardClass} shadow `;

  if (step === CHOOSING_SOURCE) {
    // nothing special
  }

  if (step === CHOOSING_TARGET) {
    if (isSource) {
      classes = classes + `${middleCheckerboardClass} border-dashed border-2 border-an-red`;
    } else if (isTargettable) {
      classes = classes + `border-double border-2 border-an-red cursor-move hover:bg-shoot`;
    } else {
      // nothing special
    }
  }

  if (step === CHOOSING_ORIENTATION) {

    if (isSource) {
      classes = classes + `${middleCheckerboardClass} border-dashed border-2 border-an-red`;
    } else if (isTarget) {
      const sourceFieldId = `${source.row}-${source.column}`;
      const { size: sourceSize } = pyramids[sourceFieldId] ?? {};
      const sourcePyramid = arrows[sourceSize];
      return <div className={`w-20 h-20 bg-an-orange border-double border-4 border-an-red grid grid-cols-3 grid-rows-3`}>
        <Orientation><span className="transform -rotate-45">{sourcePyramid}</span></Orientation>
        <Orientation><span>{sourcePyramid}</span></Orientation>
        <Orientation><span className="transform rotate-45">{sourcePyramid}</span></Orientation>
        <Orientation><span className="transform -rotate-90">{sourcePyramid}</span></Orientation>
        <Orientation><span>{bullet}</span></Orientation>
        <Orientation><span className="transform rotate-90">{sourcePyramid}</span></Orientation>
        <Orientation><span className="transform -rotate-135">{sourcePyramid}</span></Orientation>
        <Orientation><span className="transform rotate-180">{sourcePyramid}</span></Orientation>
        <Orientation><span className="transform rotate-135">{sourcePyramid}</span></Orientation>
      </div >;
    } else if (isOnPath) {
      classes = classes + `border-double border-2 border-an-red cursor-move`;
    } else {
      // nothing special
    }
  }

  if (step === AWAITING_CONFIRMATION) {
    if (isSource) {
      classes = classes + `${middleCheckerboardClass} border-dashed border-2 border-an-red`;
    } else if (isOnPath) {
      classes = classes + `border-double border-2 border-an-red cursor-move`;
    } else if (isTarget) {
      classes = classes + `border-double border-4 border-an-red cursor-move`;
    } else {
      // nothing special
    }
  }

  const fieldId = `${row}-${column}`;
  const { color, size, direction } = pyramids[fieldId] ?? {};
  const isSourceable = player === color;

  let capturingPyramid = null;
  if (isTarget) {
    const sourceFieldId = `${source.row}-${source.column}`;
    const { size: sourceSize, color: sourceColor } = pyramids[sourceFieldId] ?? {};
    capturingPyramid = <Pyramid isCapturing={true} isSourceable={false} isSource={false} isTargettable={false} isTarget={false} color={sourceColor} size={sourceSize} direction={orientation} />
  }

  return <div id={`field-${fieldId}`} key={fieldId} className={classes}>
    {pyramids[fieldId] && <Pyramid isCapturing={false} isSourceable={isSourceable} isSource={isSource} isTargettable={isTargettable} isTarget={isTarget} color={color} size={size} direction={direction} />}
    {capturingPyramid}
  </div>;
}

export default Field;
