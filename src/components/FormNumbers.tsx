import React, { useState } from "react";

interface FormNumbersProps {
  name: string;
  onSubmit: () => void;
  onNumber1Change: (value: string) => void;
  onNumber2Change: (value: string) => void;
}
const FormNumbers: React.FC<FormNumbersProps> = ({
  name,
  onSubmit,
  onNumber1Change,
  onNumber2Change,
}) => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!number1.trim() || !number2.trim()) {
      setError("Both numbers must be entered");
      return;
    }
    onSubmit();
  };

  return (
    <div className="p-4 font-bebas text-xl flex flex-col justify-center items-center gap-4 text-primary ">
      <h3>{name}, please enter two numbers</h3>
      <p className="text-sm">
        I will add them and add a third random number to the sum.
      </p>
      <input
        type="number"
        placeholder="Your first number"
        value={number1}
        onChange={(e) => {
          setNumber1(e.target.value);
          onNumber1Change(e.target.value);
        }}
        className="border border-primary rounded-md p-2 w-2/3"
      />
      <input
        type="number"
        placeholder="Your second number"
        value={number2}
        onChange={(e) => {
          setNumber2(e.target.value);
          onNumber2Change(e.target.value);
        }}
        className="border border-primary rounded-md p-2 w-2/3"
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
      <button
        className="border-2 border-secondary rounded-md p-2 bg-secondary text-white w-2/3 hover:bg-white hover:text-secondary hover:border-secondary transition duration-500 ease-in-out"
        onClick={handleSubmit}
      >
        Next Step
      </button>
    </div>
  );
};

export default FormNumbers;
