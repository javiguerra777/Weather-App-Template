import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter</h1>
        <p>Current Count {count}</p>
        <button type='button' onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
