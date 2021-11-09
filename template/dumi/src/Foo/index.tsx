import React from 'react';
import { Button } from 'react-vant';

export default ({ title }: { title: string }) => (
  <>
    <h1>{title}</h1>
    <Button type="primary">欢迎使用React Vant</Button>
  </>
);
