import React, { useRef, useState } from 'react';
import { Button, Popup, Search, DropdownMenu } from 'react-vant';
import type { DropdownMenuInstance } from 'react-vant/es/dropdown-menu';
import logo from './logo.svg';
import './App.css';

const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
];
const option2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' },
];

function App() {
  const [v, set] = useState(true)
  const [value, setValue] = useState<Record<string, string | number>>({});
  const ref = useRef<DropdownMenuInstance>(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DropdownMenu ref={ref} value={value} onChange={(v) => setValue(v)}>
          <DropdownMenu.Item name="value1" options={option1} />
          <DropdownMenu.Item name="value2" options={option2} />
        </DropdownMenu>
        <Button size="small" type="info" onClick={() => ref.current?.showItem(1)}>打开dropdown</Button>
        <Button round type="primary" onClick={() => set(true)}>欢迎使用React Vant</Button>
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
