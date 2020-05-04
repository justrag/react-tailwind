import React from 'react';
import './pyramid.css';

const twRotation = {
  NONE: 'rotate-0',
  N: 'rotate-0',
  NE: 'rotate-45',
  E: 'rotate-90',
  SE: 'rotate-135',
  S: 'rotate-180',
  SW: '-rotate-45',
  W: '-rotate-90',
  NW: '-rotate-135',
}

const twSize = { 1: 'text-xl', 2: 'text-2xl', 3: 'text-3xl' };

const arrows = { 1: "\u2191", 2: "\u21d1", 3: "\u290a" };

const Pyramid = ({ color, size, direction }) => {
  console.log({ color, size, direction });
  return <div
    className={`
    pyramid
     bold text-${color}-800 ${twSize[size]}
     transform ${twRotation[direction]}
     text-center
     `}>{arrows[size]}
  </div>;
}
export default Pyramid;