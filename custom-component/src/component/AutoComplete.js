import '../styles/AutoComplete.scss';
import { useState } from 'react';

const AutoComplete = () => {
  const autoComplete = document.querySelector('.autocomplete-comp');
  const [keyword, setKeyword] = useState('');
  const [searchedData, setSearchedData] = useState([]);

  const data = [
    { id: 1, text: 'refurbished' },
    { id: 2, text: 'refresh' },
    { id: 3, text: '중고A급' },
    { id: 4, text: 'Vintage' },
    { id: 5, text: 'antique' },
    { id: 6, text: 'rustic' },
  ];

  const onChange = (e) => {
    setKeyword(e.target.value);
    if (e.target.value === '') {
      setSearchedData([]);
    }
  };

  const onKeyUp = (e) => {
    setKeyword(e.target.value);
    if (e.target.value !== '') {
      autoComplete.classList.add('active');
      const nextSearchedData = data.filter((data) => {
        return data.text
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase());
      });
      setSearchedData(nextSearchedData);
    }
  };

  const selectKeyword = (id) => {
    setKeyword(data[id - 1].text);
    setSearchedData([]);
  };

  const clearInput = () => {
    autoComplete.classList.remove('active');
    setKeyword('');
  };

  let searchList = searchedData.map((data) => (
    <li
      key={data.id}
      onClick={() => {
        selectKeyword(data.id);
      }}
    >
      {data.text}
    </li>
  ));

  return (
    <div className="component-container">
      <div className="component-title">
        <h3>AutoComplete</h3>
      </div>
      <div className="autocomplete-comp">
        <div className="autocomplete-form">
          <input
            className="search"
            onKeyUp={onKeyUp}
            onChange={onChange}
            value={keyword}
          ></input>
          <div className="search-list">{searchList}</div>
          <div>
            <button className="delete-btn" onClick={clearInput}>
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;
