import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [listItems, setListItems] = useState([]);
  const [id, setId] = useState(1);

  function handleChangeItem(event) {
    const newValue = event.target.value;

    setInputText(newValue);
  }

  function addItem() {
    setListItems([...listItems, { id: id, item: inputText }]);
    setId((prevId) => prevId + 1);
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          className="textInput"
          onChange={handleChangeItem}
          type="text"
          value={inputText}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((item) => {
            return <li key={item.id}>{item.item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
