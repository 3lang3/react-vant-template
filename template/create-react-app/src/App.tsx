import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Dialog } from 'react-vant';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button round type="primary" onClick={() => Dialog.alert({ title: '提示', message: `参照 Vant 打造的 React 框架移动端组件库。`})}>欢迎使用React Vant</Button>
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
