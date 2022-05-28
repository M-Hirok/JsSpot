import React, { useState } from "react";

export const ColorCeneration = () => {
  const [name, setName] = useState("");

  const handleName = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };
  return (
    <div>
      <p>
        <a href="/">トップへ戻る</a>
      </p>
      <input type="color" onChange={handleName} />
      <input type="text" readOnly value={name} />
    </div>
  );
};
