import React, { useState } from "react";

type BmiProps = {
  height: number;
  weight: number;
};

export const useBmiCalculation = (height: BmiProps, weight: BmiProps) => {
  const [num, setNum] = useState(0);
  return <div>useBmiCalculation</div>;
};
