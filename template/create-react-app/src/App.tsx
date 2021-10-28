import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Popup, Search } from 'react-vant';
import { checkResponse } from './utils';

function App() {
  const [v, set] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button round type="primary" onClick={() => set(true)}>欢迎使用React Vant</Button>
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
        <Popup visible={v} onClose={() => set(false)} position="bottom" round>
      <Search
        style={{ width: '100%' }}
        label="搜索"
        placeholder="请输入搜索关键词"
        onChange={(val) => {
          console.log('onChange----', val);
        }}
        onSearch={(val) => {
          console.log('onSearch', val);
        }}
      />
      </Popup>
      </header>
    </div>
  );
}

export default App;
