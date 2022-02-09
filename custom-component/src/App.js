import React from 'react';
import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';
import './App.css';

const App = () => {
  return (
    <div>
      <Toggle></Toggle>
      <Modal></Modal>
      <Tab></Tab>
      <Tag></Tag>
      <AutoComplete></AutoComplete>
      <ClickToEdit></ClickToEdit>
    </div>
  );
};

export default App;
