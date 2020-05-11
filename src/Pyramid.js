import React from 'react';
import { arrows, bullet, CHOOSING_SOURCE, CHOOSING_TARGET, CHOOSING_ORIENTATION, AWAITING_CONFIRMATION } from './constants';
import { step, source, target } from './state';

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

const Pyramid = ({ isCapturing, isSourceable, isSource, isTargettable, isTarget, color, size, direction }) => {
  let classes = `bold text-an-dark-${color} ${twSize[size]} text-center text-shadow-blackwhite transform ${twRotation[direction]} `

  if (step === CHOOSING_SOURCE) {
    if (isSourceable) {
      classes = classes + `hover:text-an-middle-${color} cursor-pointer`;
    } else {
      classes = classes + `cursor-not-allowed`;
    }
  }

  if (step === CHOOSING_TARGET) {
    if (isSource) {
      classes = classes + `text-shadow-yelloworange`;
    } else if (isTargettable) {
      classes = classes + 'cursor-crosshair';
    } else {
      // Nothing special
    }
  }

  if (step === CHOOSING_ORIENTATION) {
    if (isSource) {
      classes = classes + `opacity-50`;
    } else if (isTarget) {
      classes = classes + 'self-start mr-auto opacity-25';
    } else {
      // Nothing special
    }
  }

  if (step === AWAITING_CONFIRMATION) {
    if (isSource) {
      classes = classes + `opacity-50`;
    } else if (isTarget) {
      classes = classes + 'self-start mr-auto opacity-25';
    } else if (isCapturing) {
      classes = classes + 'z-10';
    } else {
      // Nothing special
    }
  }


  return <div
    className={classes}>
    {direction === 'NONE' ? bullet.repeat(size) : arrows[size]}
  </div>
};
export default Pyramid;