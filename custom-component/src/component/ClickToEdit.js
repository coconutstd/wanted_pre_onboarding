import '../styles/ClickToEdit.scss';
import { useState } from 'react';

const ClickToEdit = () => {
  const [data, setData] = useState({ name: '김코딩', age: '20' });
  const [result, setResult] = useState({ name: '김코딩', age: '20' });

  const onChange = (e) => {
    const nextData = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(nextData);
  };

  const onBlur = (e) => {
    const nextResult = {
      ...result,
      [e.target.name]: e.target.value,
    };
    setResult(nextResult);
  };

  return (
    <div className="component-container">
      <div className="component-title">
        <h3>ClickToEdit</h3>
      </div>
      <div className="component-inner">
        <div className="edit-component">
          <div className="edit-form">
            <div className="name">
              <label htmlFor="name">이름</label>
              <input
                name="name"
                onChange={onChange}
                onBlur={onBlur}
                value={data.name}
              ></input>
            </div>
            <div className="age">
              <label htmlFor="age">나이</label>
              <input
                name="age"
                onChange={onChange}
                onBlur={onBlur}
                value={data.age}
              ></input>
            </div>
          </div>

          <div className="edit-result">
            <p>
              이름 <span>{result.name}</span>
            </p>
            <p>
              나이 <span>{result.age}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClickToEdit;
