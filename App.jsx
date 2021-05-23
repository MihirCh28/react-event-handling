import React, { useState } from 'react';

const App = () => {
  const bcol = 'black';
  const [bg, setBg] = useState(bcol);
  const [alter, setAlter] = useState('Click Me :🙃');


  const bgChange = () => {
    const col = 'brown';
    setBg(col);
    setAlter('Saxxxy!! 🥵')
  };
  
  const prev = () => {
    const col = 'black';
    setBg(col);
    setAlter('Tryin to go back!? 😛')
  };

  return (
    <>
      <div style={{ backgroundColor: bg }} >
        <button onClick={bgChange} onDoubleClick = {prev} > {alter} </button>
      </div>
    </>
  );
};

export default App;