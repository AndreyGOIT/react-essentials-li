import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');
  const [hex, setHex] = useState('#000000');
  
  const submit = (e) => {
    e.preventDefault();
    alert(`${color} ${hex}`);
    setColor('');
    setHex('#000000');
  };
  return (
    <form onSubmit={submit}>
      <input value={color} type="text" placeholder='type color' onChange={(e) => setColor(e.target.value)} />
      <input value={hex} type="color" onChange={(e) => setHex(e.target.value)} />
      <button>ADD</button>
    </form>
  );
}

export default App;
