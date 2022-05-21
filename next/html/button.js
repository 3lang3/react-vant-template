'use strict';

const e = React.createElement;
const rv = window['react-vant'];

// Find all DOM containers, and render Like buttons into them.
const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render(
  e(rv.Button, {
    type: 'primary', children: 'Hello React Vant', onClick: function () {
      rv.Dialog.confirm({
        title: '标题',
        message: '代码是写出来给人看的，附带能在机器上运行',
      })
    }
  })
);
