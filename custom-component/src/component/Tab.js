import '../styles/Tab.scss';

const Tab = () => {
  const tabClick = (e) => {
    console.log(e);
  };

  return (
    <div className="tab-component-container">
      <div className="tab-component">
        <div className="tab-component-title">
          <h3>Tab</h3>
        </div>
        <div className="tab">
          <ul className="tab-menu">
            <li className="tab-item"></li>
            <li className="tab-item is-active">
              <a className="tab-link">Tab1</a>
            </li>
            <li className="tab-item">
              <a className="tab-link">Tab2</a>
            </li>
            <li className="tab-item">
              <a className="tab-link">Tab3</a>
            </li>
          </ul>
          <div className="tab-content">탭 컨텐츠 입니다.</div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
