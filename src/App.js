import React from 'react';
import { hot } from 'react-hot-loader/root';
import Header from '@Components/header/Header'
import Body from './Body'

function App() {
  return (
    <div>
      <Header />
      <Body />
      <div>Footer</div>
    </div>
  );
}

export default hot(App);
