import '../styles/Toggle.scss';
import { useState } from 'react';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const onClick = (e) => {
    const indicator = document.querySelector('.indicator');
    const toggle = document.querySelector('.toggle');
    if (indicator.style.transform) {
      indicator.style.transform = '';
      toggle.style.background = 'gray';
    } else {
      indicator.style.transform = `translateX(40px)`;
      toggle.style.background = 'purple';
    }

    setToggle(!isToggled);
  };

  return (
    <div className="container">
      <div className="inner">
        <label className="toggle-component" for="toggle">
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
