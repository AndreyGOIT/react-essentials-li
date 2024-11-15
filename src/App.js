import './App.css';
import { useRef } from 'react';

function App() {
  const txtColor = useRef();
  const hexColor = useRef();
  const submit = (e) => {
    e.preventDefault();
    const color = txtColor.current.value;
    const hex = hexColor.current.value;
    alert(`${color} ${hex}`);
  };
  return (
    <form onSubmit={submit}>
      <input ref={txtColor} type="text" placeholder='type color'/>
      <input ref={hexColor} type="color" />
      <button>ADD</button>
    </form>
  );
}

export default App;
