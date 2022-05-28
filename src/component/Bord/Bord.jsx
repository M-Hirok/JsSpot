import React, { useState } from "react";
import "../../css/bord.css";

export const Bord = () => {
  const [val, setVal] = useState();
  const [inputTextBox, setInputTextBox] = useState([]);

  const handleChang = (e) => {
    setVal(e.target.value);
  };

  const handleCLick = () => {
    setInputTextBox([...inputTextBox, val]);
  };

  console.log(inputTextBox);

  console.log(val);
  const onDragOver = (e) => {
    e.preventDefault();
  };
  const onDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const draggableElement = document.getElementById(id);
    const dropzone = e.target;
    dropzone.appendChild(draggableElement);
    e.dataTransfer.clearData();
    e.currentTarget.style.backgroundColor = "white";
  };
  const onDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    e.currentTarget.style.backgroundColor = "yellow";
  };
  return (
    <body>
      <input type="text" onChange={handleChang} />
      <button onClick={handleCLick}>追加</button>
      <div className="example-parent">
        <div className="example-origin">
          未着手
          {inputTextBox.map((text) => (
            <div
              id="draggable"
              className="examle-draggable"
              draggable="true"
              onDragStart={(e) => onDragStart(e)}
              onDrop={(e) => onDrop(e)}
            >
              {text}
            </div>
          ))}
        </div>
        <div
          id="droppable-1"
          className="example-dropzone"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e)}
        >
          作業中
        </div>
        <div
          id="droppable-1"
          className="example-dropzone"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e)}
        >
          完了済
        </div>
      </div>
    </body>
  );
};
