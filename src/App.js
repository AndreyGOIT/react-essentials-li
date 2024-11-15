import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    fetch("https://api.github.com/users/moonhighway")
      .then((res) => res.json())
      .then(setData);
  }, []);
  if (data) {
    return (
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    );
  }
  return (
    <h1>Data</h1>
  );
}

export default App;
