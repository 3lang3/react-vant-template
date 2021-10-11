import { checkStatus } from '@/utils';
import React from 'react';

export default ({ title }: { title: string }) => (
  <h1 onClick={() => checkStatus(401)}>{title}</h1>
);
