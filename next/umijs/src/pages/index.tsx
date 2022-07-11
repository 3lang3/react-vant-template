import React, { useState } from 'react';
import { Field } from 'react-vant';

// Field 是基于 Cell 实现的，可以使用 Cell.Group 作为容器来提供外边框。
export default () => {
  const [value, setValue] = useState('');
  return (
    <Field
      label="文本"
      tooltip="提示tooltip"
      intro={<div>We must make sure that your are a human.</div>}
      placeholder="请输入文本"
      value={value}
      onChange={setValue}
    />
  );
};
