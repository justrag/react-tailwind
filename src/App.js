import React from 'react';

import './tailwind.generated.css';

import Board from './Board';
import Step from './Step';

import { step, turn, source, target, player, board, pyramids } from './state';

const App = () => (
  <>
    <h1 className="text-center text-purple-500 bold-100">Pikemen</h1>
    <h2 className="text-center text-purple-500 bold-100">Turn: {turn} (<span className={`text-white-800 bg-${player}-800`}>{player}</span> player)</h2>
    <Board board={board} />
    <Step step={step} />
  </>
);

export default App;
