import React from 'react';
import Counter from './Counter';


const App = () => {
  return (
    <div>
      <Counter min={0} max={10} />
    </div>
  );
};

export default App;