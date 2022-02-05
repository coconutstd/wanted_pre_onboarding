import '../styles/Tab.scss';
import { useState } from 'react';

const Tab = () => {
  const [tabs, setTabs] = useState([
    { id: 1, text: 'Tab1', isActive: true },
    { id: 2, text: 'Tab2', isActive: false },
    { id: 3, text: 'Tab3', isActive: false },
  ]);

  const [contents, setContents] = useState([
    { id: 1, text: 'Tab menu ONE' },
    { id: 2, text: 'Tab menu TWO' },
    { id: 3, text: 'Tab menu THREE' },
  ]);

  const tabClick = (id) => {
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach((tab) => {
      tab.classList.remove('is-active');
    });
    tabs[id].classList.add('is-active');
    switchContent(id);
  };

  const switchContent = (id) => {
    const content = document.querySelector('.tab-content p');
    content.innerText = contents[id - 1].text;
  };

  const tabList = tabs.map((tab) => (
    <li
      key={tab.id}
      className={tab.isActive === true ? 'tab-item is-active' : 'tab-item'}
      onClick={() => tabClick(tab.id)}
    >
      <a className="tab-link">{tab.text}</a>
    </li>
  ));

  return (
    <div className="tab-component-container">
      <div className="tab-component">
        <div className="tab-component-title">
          <h3>Tab</h3>
        </div>
        <div className="tab">
          <ul className="tab-menu">
            <li className="tab-item"></li>
            {tabList}
          </ul>
          <div className="tab-content">
            <p>{contents[0].text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
