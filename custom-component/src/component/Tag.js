import { useState } from 'react';
import '../styles/Tag.scss';

const Tag = () => {
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([{ id: 1, text: 'wanted' }]);
  const [nextId, setNextId] = useState(2);

  const onChange = (e) => {
    setTag(e.target.value);
  };

  const addTag = (e) => {
    if (e.key == 'Enter') {
      const nextTags = tags.concat({ id: nextId, text: tag });
      setNextId(nextId + 1);
      setTags(nextTags);
      setTag('');
    }
  };

  const onFocus = () => {
    const tagComponent = document.querySelector('.tag-component');
    tagComponent.style.border = '1.5px solid purple';
  };

  const onBlur = () => {
    const tagComponent = document.querySelector('.tag-component');
    tagComponent.style.border = '1px solid gray';
  };

  const removeTag = (id) => {
    const nextTags = tags.filter((tag) => tag.id !== id);
    setTags(nextTags);
  };

  const tagList = tags.map((tag) => (
    <div key={tag.id} className="tag">
      {tag.text}
      <button className="delete-tag" onClick={() => removeTag(tag.id)}></button>
    </div>
  ));

  return (
    <div className="component-container">
      <div className="component-title">
        <h3>Tag</h3>
      </div>
      <div className="component-inner">
        <div className="tag-component">
          {tagList}
          <input
            placeholder="Pleace Enter to add tags"
            value={tag}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyPress={addTag}
            onChange={onChange}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Tag;
