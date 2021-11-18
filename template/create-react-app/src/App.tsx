import { Button, hooks } from 'react-vant';
import logo from './logo.svg';
import './App.css';

function App() {
  const { current } = hooks.useCountDown({ time: 24 * 60 * 60 })

  console.log(current)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button round type="primary">欢迎使用React Vant</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
