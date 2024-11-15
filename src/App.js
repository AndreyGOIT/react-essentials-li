import './App.css';
import { useState } from 'react';

function App() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="App">
      <input type={'checkbox'} value={isChecked} onChange={() => {setIsChecked(!isChecked)}} />
      <label>{isChecked ? 'Checked' : 'Not checked' }</label>
    </div>
  );
}

export default App;
