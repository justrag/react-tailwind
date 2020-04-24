import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.generated.css';

const App = () => (
	<>
	<h1 className="text-purple-500 bold-100 border-bottom-4">Header</h1>
  <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
    <div className="ml-6 pt-1">
      <h1 className="text-2xl text-blue-700 leading-tight">
        Tailwind and Create React App
      </h1>
      <p className="text-base text-gray-700 leading-normal">
        Building apps together
      </p>
    </div>
  </div>
	</>
);

ReactDOM.render(<App />, document.querySelector('#root'));
