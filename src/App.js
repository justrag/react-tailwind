import React from 'react';

import './tailwind.generated.css';

import Board from './Board';
import Step from './Step';

import { step, turn, player, board } from './state';

const App = () => (
  <>
    <h1 className="text-center text-an-dark-green bold-100">Pikemen</h1>
    <h2 className="text-center text-an-dark-green bold-100">Turn: {turn} (<span className={`text-white-800 bg-an-dark-${player}`}>{player}</span> player)</h2>
    <Board board={board} />
    <Step step={step} />
  </>
);

export default App;
