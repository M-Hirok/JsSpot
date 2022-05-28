import React, { useState } from "react";
import { useBmiCalculation } from "../../hooks/useBmiCalculation";

export const BmiCalculation = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const handleName = (event: any): void => {
    setHeight(event.target.value);
  };

  const handleWeight = (event: any): void => {
    setWeight(event.target.value);
  };

  const Calculation = () => {
    const bmi = weight / (height / 100) ** 2;
    setBmi(bmi);
    return bmi;
  };

  return (
    <>
      <p>
        <a href="/">トップへ戻る</a>
      </p>
      <h1>BMI計算</h1>
      <p>
        身長：
        <input
          type="number"
          placeholder="身長"
          onChange={handleName}
          value={height}
        />
        cm
      </p>
      <p>
        体重：
        <input
          type="number"
          placeholder="身長"
          onChange={handleWeight}
          value={weight}
        />
        kg
      </p>
      <p>
        BMI：
        <input type="text" readOnly value={bmi} />
      </p>
      <button onClick={Calculation}>計算</button>
    </>
  );
};
