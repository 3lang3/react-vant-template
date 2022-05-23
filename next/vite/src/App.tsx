import React from 'react';
import { Notify, Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell
        title="主要通知"
        isLink
        onClick={() => Notify.show({ type: 'primary', message: '通知内容' })}
      />
      <Cell
        title="成功通知"
        isLink
        onClick={() => Notify.show({ type: 'success', message: '通知内容' })}
      />
      <Cell
        title="危险通知"
        isLink
        onClick={() => Notify.show({ type: 'danger', message: '通知内容' })}
      />
      <Cell
        title="警告通知"
        isLink
        onClick={() => Notify.show({ type: 'warning', message: '通知内容' })}
      />
    </>
  );
};