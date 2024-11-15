import './App.css';
import { useState } from 'react';

function App({ library }) {
  const what = useState();
  console.log(what);
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
