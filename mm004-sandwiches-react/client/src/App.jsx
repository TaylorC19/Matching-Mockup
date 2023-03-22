import React from 'react';

import './App.css';
import SandwichMenu from './components/sandwich-menu';

function App() {

  return (
    <div className="App">
      <header className='heading'>
        <h1>Sandwiches Recipes</h1>
      </header>
      <SandwichMenu />

    </div>
  );
}

export default App;
