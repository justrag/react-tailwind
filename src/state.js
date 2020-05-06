import {
  RED,
  BLUE,
  NONE,
  N,
  NE,
  E,
  SE,
  S,
  SW,
  W,
  NW,
  CHOOSING_SOURCE,
  CHOOSING_TARGET,
  AWAITING_CONFIRMATION,
  CHOOSING_ORIENTATION,
} from './constants';

import { range } from './lib';

//export const step = CHOOSING_SOURCE;

// export const step = CHOOSING_TARGET;
// export const source = { row: 7, column: 5 };

export const step = CHOOSING_ORIENTATION
export const source = { row: 7, column: 5 };
export const target = { row: 5, column: 3 };

//export const step = AWAITING_CONFIRMATION;
// export const source = { row: 7, column: 5 };
// export const target = { row: 5, column: 3 };
// export const orientation = SW;

export const turn = 1;

//export const player = RED;
export const player = BLUE;

export const board = range(1, 8).reduce((result, row) => [...result, ...range(1, 8).map(column => ({ row, column }))], []);
board[43].isTargettable = true;
board[34].isTargettable = true;
board[25].isTargettable = true;

export const pyramids = {
  '1-1': {
    id: 'big-red-1',
    color: RED,
    size: 3,
    row: 1,
    column: 1,
    direction: S,
  },
  '1-2': {
    id: 'big-red-2',
    color: RED,
    size: 3,
    row: 1,
    column: 2,
    direction: SW,
  },
  '1-3': {
    id: 'big-red-3',
    color: RED,
    size: 3,
    row: 1,
    column: 3,
    direction: SE,
  },
  '2-1': {
    id: 'big-red-4',
    color: RED,
    size: 3,
    row: 2,
    column: 1,
    direction: NE,
  },
  '3-1': {
    id: 'big-red-5',
    color: RED,
    size: 3,
    row: 3,
    column: 1,
    direction: NW,
  },
  '2-2': {
    id: 'mid-red-1',
    color: RED,
    size: 2,
    row: 2,
    column: 2,
    direction: N,
  },
  '2-3': {
    id: 'mid-red-2',
    color: RED,
    size: 2,
    row: 2,
    column: 3,
    direction: E,
  },
  '3-2': {
    id: 'mid-red-3',
    color: RED,
    size: 2,
    row: 3,
    column: 2,
    direction: W,
  },
  '1-4': {
    id: 'mid-red-4',
    color: RED,
    size: 2,
    row: 1,
    column: 4,
    direction: NONE,
  },
  '4-1': {
    id: 'mid-red-5',
    color: RED,
    size: 2,
    row: 4,
    column: 1,
    direction: NONE,
  },
  '1-5': {
    id: 'small-red-1',
    color: RED,
    size: 1,
    row: 1,
    column: 5,
    direction: SE,
  },
  '2-4': {
    id: 'small-red-2',
    color: RED,
    size: 1,
    row: 2,
    column: 4,
    direction: NONE,
  },
  '3-3': {
    id: 'small-red-3',
    color: RED,
    size: 1,
    row: 3,
    column: 3,
    direction: NONE,
  },
  '4-2': {
    id: 'small-red-4',
    color: RED,
    size: 1,
    row: 4,
    column: 2,
    direction: NONE,
  },
  '5-1': {
    id: 'small-red-5',
    color: RED,
    size: 1,
    row: 5,
    column: 1,
    direction: NONE,
  },
  '6-8': {
    id: 'big-blue-1',
    color: BLUE,
    size: 3,
    row: 6,
    column: 8,
    direction: NONE,
  },
  '7-8': {
    id: 'big-blue-2',
    color: BLUE,
    size: 3,
    row: 7,
    column: 8,
    direction: NONE,
  },
  '8-6': {
    id: 'big-blue-3',
    color: BLUE,
    size: 3,
    row: 8,
    column: 6,
    direction: NONE,
  },
  '8-7': {
    id: 'big-blue-4',
    color: BLUE,
    size: 3,
    row: 8,
    column: 7,
    direction: NONE,
  },
  '8-8': {
    id: 'big-blue-5',
    color: BLUE,
    size: 3,
    row: 8,
    column: 8,
    direction: NONE,
  },
  '5-8': {
    id: 'mid-blue-1',
    color: BLUE,
    size: 2,
    row: 5,
    column: 8,
    direction: NONE,
  },
  '6-7': {
    id: 'mid-blue-2',
    color: BLUE,
    size: 2,
    row: 6,
    column: 7,
    direction: NONE,
  },
  '7-6': {
    id: 'mid-blue-3',
    color: BLUE,
    size: 2,
    row: 7,
    column: 6,
    direction: NONE,
  },
  '7-7': {
    id: 'mid-blue-4',
    color: BLUE,
    size: 2,
    row: 7,
    column: 7,
    direction: NONE,
  },
  '8-5': {
    id: 'mid-blue-5',
    color: BLUE,
    size: 2,
    row: 8,
    column: 5,
    direction: NONE,
  },
  '4-8': {
    id: 'small-blue-1',
    color: BLUE,
    size: 1,
    row: 4,
    column: 8,
    direction: NONE,
  },
  '5-7': {
    id: 'small-blue-2',
    color: BLUE,
    size: 1,
    row: 5,
    column: 7,
    direction: NONE,
  },
  '6-6': {
    id: 'small-blue-3',
    color: BLUE,
    size: 1,
    row: 6,
    column: 6,
    direction: NONE,
  },
  '7-5': {
    id: 'small-blue-4',
    color: BLUE,
    size: 1,
    row: 7,
    column: 5,
    direction: NONE,
  },
  '8-4': {
    id: 'small-blue-5',
    color: BLUE,
    size: 1,
    row: 8,
    column: 4,
    direction: NONE,
  },
};

