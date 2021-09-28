import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Notify } from 'react-vant';
import { checkResponse } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button round type="primary" onClick={() => Notify.show({ message: 'test notify', type: 'success', duration: 0 })}>欢迎使用React Vant</Button>
        <Button round type="primary" onClick={() => checkResponse({ type: 1, message: "请求错误" })}>测试Notify</Button>
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
