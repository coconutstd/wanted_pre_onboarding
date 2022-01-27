import '../SassComponent.scss';

const Toggle = () => {
  const style = {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={style} className="container">
      <div className="toggle-component">
        <input type="checkbox"></input>
        "Off"
        <span>
          <span></span>
        </span>
        "On"
      </div>
    </div>
  );
};

export default Toggle;
