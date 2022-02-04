import React, { Component } from 'react';
import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Tab from './component/Tab';
import './App.css';

const App = () => {
  return (
    <div>
      <Toggle></Toggle>
      <Modal></Modal>
      <Tab></Tab>
    </div>
  );
};

export default App;
