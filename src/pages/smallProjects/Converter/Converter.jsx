import React from 'react';
import { Block } from './Block';
import './index.scss';

export const Converter = () => {
  return (
    <div className="App">
      <Block value={0} currency="RUB" onChangeCurrency={(cur) => console.log(cur)} />
      <Block value={0} currency="USD" />
    </div>
  );
};
