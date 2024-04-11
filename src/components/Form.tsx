import FormName from "./FormName";
import FormNumbers from "./FormNumbers";
import FormResult from "./FormResult";
import { useState } from "react";
import FormRevial from "./FormRevial";

const Form = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [sum, setSum] = useState(0);
  const [error, setError] = useState("");

  const handleFormSubmit = (name: string) => {
    setName(name);
    setStep(2);
  };

  const handleNumbersSubmit = async () => {
    try {
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

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();
      setSum(data.result);
      setStep(3);
    } catch (error) {
      setError("Server error");
    }
  };
  const handleRevial = () => {
    setStep(4);
  };

  return (
    <div className=" w-[300px] sm:w-[380px] h-[320px] rounded-xl shadow-md shadow-secondary bg-lila">
      {step === 1 && <FormName onSubmit={handleFormSubmit} />}
      {step === 2 && (
        <FormNumbers
          name={name}
          onSubmit={() => handleNumbersSubmit()}
          onNumber1Change={(value) => setNumber1(value)}
          onNumber2Change={(value) => setNumber2(value)}
          serverError={error}
        />
      )}
      {step === 3 && (
        <FormResult
          name={name}
          number1={number1}
          number2={number2}
          sum={sum}
          onClick={handleRevial}
        />
      )}
      {step === 4 && (
        <FormRevial sum={sum} number1={number1} number2={number2} />
      )}
    </div>
  );
};

export default Form;
