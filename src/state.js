import {
  GREEN,
  BROWN,
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

export const board = range(1, 8).reduce((result, row) => [...result, ...range(1, 8).map(column => ({ row, column }))], []);

// export const step = CHOOSING_SOURCE;
// export const source = undefined;
// export const target = undefined;

// export const step = CHOOSING_TARGET;
// export const source = { row: 7, column: 5 };
// export const target = undefined;
// board[43].isTargettable = true;
// board[34].isTargettable = true;
// board[25].isTargettable = true;

// export const step = CHOOSING_ORIENTATION
// export const source = { row: 7, column: 5 };
// export const target = { row: 4, column: 2 };
// board[43].isOnPath = true;
// board[34].isOnPath = true;

export const step = AWAITING_CONFIRMATION;
export const source = { row: 7, column: 5 };
export const target = { row: 4, column: 2 };
export const orientation = SW;
board[43].isOnPath = true;
board[34].isOnPath = true;

export const turn = 1;

//export const player = GREEN;
export const player = BROWN;

export const pyramids = {
  '1-1': {
    id: 'big-green-1',
    color: GREEN,
    size: 3,
    row: 1,
    column: 1,
    direction: S,
  },
  '1-2': {
    id: 'big-green-2',
    color: GREEN,
    size: 3,
    row: 1,
    column: 2,
    direction: SW,
  },
  '1-3': {
    id: 'big-green-3',
    color: GREEN,
    size: 3,
    row: 1,
    column: 3,
    direction: SE,
  },
  '2-1': {
    id: 'big-green-4',
    color: GREEN,
    size: 3,
    row: 2,
    column: 1,
    direction: NE,
  },
  '3-1': {
    id: 'big-green-5',
    color: GREEN,
    size: 3,
    row: 3,
    column: 1,
    direction: NW,
  },
  '2-2': {
    id: 'mid-green-1',
    color: GREEN,
    size: 2,
    row: 2,
    column: 2,
    direction: N,
  },
  '2-3': {
    id: 'mid-green-2',
    color: GREEN,
    size: 2,
    row: 2,
    column: 3,
    direction: E,
  },
  '3-2': {
    id: 'mid-green-3',
    color: GREEN,
    size: 2,
    row: 3,
    column: 2,
    direction: W,
  },
  '1-4': {
    id: 'mid-green-4',
    color: GREEN,
    size: 2,
    row: 1,
    column: 4,
    direction: NONE,
  },
  '4-1': {
    id: 'mid-green-5',
    color: GREEN,
    size: 2,
    row: 4,
    column: 1,
    direction: NONE,
  },
  '1-5': {
    id: 'small-green-1',
    color: GREEN,
    size: 1,
    row: 1,
    column: 5,
    direction: SE,
  },
  '2-4': {
    id: 'small-green-2',
    color: GREEN,
    size: 1,
    row: 2,
    column: 4,
    direction: NONE,
  },
  '3-3': {
    id: 'small-green-3',
    color: GREEN,
    size: 1,
    row: 3,
    column: 3,
    direction: NONE,
  },
  '4-2': {
    id: 'small-green-4',
    color: GREEN,
    size: 1,
    row: 4,
    column: 2,
    direction: NONE,
  },
  '5-1': {
    id: 'small-green-5',
    color: GREEN,
    size: 1,
    row: 5,
    column: 1,
    direction: NONE,
  },
  '6-8': {
    id: 'big-brown-1',
    color: BROWN,
    size: 3,
    row: 6,
    column: 8,
    direction: NONE,
  },
  '7-8': {
    id: 'big-brown-2',
    color: BROWN,
    size: 3,
    row: 7,
    column: 8,
    direction: NONE,
  },
  '8-6': {
    id: 'big-brown-3',
    color: BROWN,
    size: 3,
    row: 8,
    column: 6,
    direction: NONE,
  },
  '8-7': {
    id: 'big-brown-4',
    color: BROWN,
    size: 3,
    row: 8,
    column: 7,
    direction: NONE,
  },
  '8-8': {
    id: 'big-brown-5',
    color: BROWN,
    size: 3,
    row: 8,
    column: 8,
    direction: NONE,
  },
  '5-8': {
    id: 'mid-brown-1',
    color: BROWN,
    size: 2,
    row: 5,
    column: 8,
    direction: NONE,
  },
  '6-7': {
    id: 'mid-brown-2',
    color: BROWN,
    size: 2,
    row: 6,
    column: 7,
    direction: NONE,
  },
  '7-6': {
    id: 'mid-brown-3',
    color: BROWN,
    size: 2,
    row: 7,
    column: 6,
    direction: NONE,
  },
  '7-7': {
    id: 'mid-brown-4',
    color: BROWN,
    size: 2,
    row: 7,
    column: 7,
    direction: NONE,
  },
  '8-5': {
    id: 'mid-brown-5',
    color: BROWN,
    size: 2,
    row: 8,
    column: 5,
    direction: NONE,
  },
  '4-8': {
    id: 'small-brown-1',
    color: BROWN,
    size: 1,
    row: 4,
    column: 8,
    direction: NONE,
  },
  '5-7': {
    id: 'small-brown-2',
    color: BROWN,
    size: 1,
    row: 5,
    column: 7,
    direction: NONE,
  },
  '6-6': {
    id: 'small-brown-3',
    color: BROWN,
    size: 1,
    row: 6,
    column: 6,
    direction: NONE,
  },
  '7-5': {
    id: 'small-brown-4',
    color: BROWN,
    size: 1,
    row: 7,
    column: 5,
    direction: NONE,
  },
  '8-4': {
    id: 'small-brown-5',
    color: BROWN,
    size: 1,
    row: 8,
    column: 4,
    direction: NONE,
  },
};

