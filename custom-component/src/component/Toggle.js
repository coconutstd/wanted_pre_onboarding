import '../styles/Toggle.scss';
import { useState } from 'react';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const onClick = (e) => {
    const indicator = document.querySelector('.indicator');
    const toggle = document.querySelector('.toggle');
    if (indicator.style.transform) {
      indicator.style.transform = '';
      toggle.style.backgroundPosition = '';
    } else {
      indicator.style.transform = `translateX(39px)`;
      toggle.style.backgroundPosition = 'left';
    }
    setToggle(!isToggled);
  };

  return (
    <div className="component-container">
      <div className="component-title">
        <h3>Toggle</h3>
      </div>
      <div className="inner">
        <label className="toggle-component" htmlFor="toggle">
          <input
            onClick={onClick}
            id="toggle"
            className="toggle-input"
            type="checkbox"
          ></input>
          <span className="toggle">
            <span className="indicator"></span>
          </span>
        </label>
        {isToggled === false ? 'Toggle Switch Off' : 'Toggle Switch On'}
      </div>
    </div>
  );
};

export default Toggle;
