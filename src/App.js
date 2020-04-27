import React from 'react';
import './tailwind.generated.css';
import Board from './Board';

import { board, pyramids } from './state';

const App = () => (
  <>
    <h1 className="text-center text-purple-500 bold-100">Pikemen</h1>
    <Board board={board} pyramids={pyramids} />
  </>
);

export default App;
