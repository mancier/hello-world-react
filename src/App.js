import logo from './logo.svg';
import './App.css';

function App() {
  var hash =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome Human!
        </p>
        <small>{hash}</small>
      </header>
    </div>
  );
}

export default App;
