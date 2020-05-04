import React from 'react';
import './tailwind.generated.css';
import Board from './Board';

import { step, turn, player, board, pyramids } from './state';
import { CHOOSING_SOURCE } from './constants';

const App = () => (
  <>
    <h1 className="text-center text-purple-500 bold-100">Pikemen</h1>
    <h2 className="text-center text-purple-500 bold-100">Turn: {turn} (<span className={`text-white-800 bg-${player}-800`}>{player}</span> player)</h2>
    <Board player={player} board={board} pyramids={pyramids} />
    {step === CHOOSING_SOURCE && <h3 className="text-center text-purple-500 bold-100">Choose the pyramid to move</h3>}
  </>
);

export default App;
