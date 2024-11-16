import './App.css';
import { useState, useEffect } from 'react';

function GitHubUser({name, location, avatar}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Location: {location}</p>
      <img src={avatar} height={150} alt={name}/>
    </div>
  );
}

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
      <GitHubUser 
      name={data.name}
      location={data.location}
      avatar={data.avatar_url} />
    );
  }
  return (
    <h1>Data</h1>
  );
}

export default App;
