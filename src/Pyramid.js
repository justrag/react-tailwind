import React from 'react';
import './pyramid.css';
import { arrows, bullet } from './constants';

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

const twSize = { 1: 'text-2xl', 2: 'text-3xl', 3: 'text-4xl' };

const Pyramid = ({ isSourceable, isSource, color, size, direction }) =>
  <div
    className={`
     bold text-${color}-800 ${twSize[size]} text-center
     transform ${twRotation[direction]}
     ${isSourceable ? `hover:text-${color}-200` : ''}
     ${isSourceable ? `cursor-pointer` : 'cursor-not-allowed'}
     ${isSource ? `text-shadow-yelloworange` : 'text-shadow-blackwhite'}
     `}>
    {direction === 'NONE' ? bullet.repeat(size) : arrows[size]}
  </div>;
export default Pyramid;