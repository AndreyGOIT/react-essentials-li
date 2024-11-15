import './App.css';
import { useReducer } from 'react';

function App() {
  const [isChecked, setIsChecked] = useReducer((isChecked) => !isChecked, false);
  return (
    <div className="App">
      <input type='checkbox' 
      value={isChecked} 
      onChange={setIsChecked} />
      <label>{isChecked ? 'Checked' : 'Not checked' }</label>
    </div>
  );
}

export default App;
