import FormName from "./FormName";
import FormNumbers from "./FormNumbers";
import FormResult from "./FormResult";
import { useState } from "react";

const Form = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [sum, setSum] = useState(0);
  const [showResult, setShowResult] = useState(false);


  const handleFormSubmit = (name: string) => {
    setName(name);
    setStep(step + 1);
  };

  const handleNumbersSubmit = async () => {
    const response = await fetch("http://localhost:3300/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        num1: parseInt(number1),
        num2: parseInt(number2),
      }),
    });
    const data = await response.json();
    setSum(data.result);
    setShowResult(true);
    setStep(step + 1)
  };

  return (
    <div className=" w-[380px] h-[300px] rounded-xl shadow-md shadow-secondary bg-lila">
      {step === 1 && <FormName onSubmit={handleFormSubmit} />}
      {step === 2 && (
        <FormNumbers
          name={name}
          onSubmit={() => handleNumbersSubmit()}
          onNumber1Change={(value) => setNumber1(value)}
          onNumber2Change={(value) => setNumber2(value)}
        />
      )}
       {showResult && (
        <FormResult name={name} number1={number1} number2={number2} sum={sum} />
        )}
    </div>
  );
};

export default Form;
