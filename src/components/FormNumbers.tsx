import React, { useState } from "react";

interface FormNumbersProps {
  name: string;
  onSubmit: () => void;
  onNumber1Change: (value: string) => void;
  onNumber2Change: (value: string) => void;
}
const FormNumbers:React.FC<FormNumbersProps> = ({name, onSubmit, onNumber1Change, onNumber2Change}) => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  return (
    <div className="flex flex-col">
      <h3>{name}, please enter two numbers</h3>
      <p>I will add them and add a third random number to the sum.</p>
    <input
        type="number"
        placeholder="Your first number"
        value={number1}
        onChange={(e) => {
          setNumber1(e.target.value);
          onNumber1Change(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Your second number"
        value={number2}
        onChange={(e) => {
          setNumber2(e.target.value);
          onNumber2Change(e.target.value);
        }}
      />
      <button onClick={onSubmit}>Next Step</button>
    </div>
  );
};

export default FormNumbers;
