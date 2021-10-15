import React, { useState } from 'react'
import { Button, Dialog } from 'react-vant';

import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Button round type="primary" onClick={() => Dialog.alert({ title: '提示', message: `参照 Vant 打造的 React 框架移动端组件库。`})}>欢迎使用React Vant</Button>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
