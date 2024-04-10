import FormName from "./FormName";
import FormNumbers from "./FormNumbers";
import FormResult from "./FormResult";
import { useState } from "react";

const Form = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");

    const handleFormSubmit = (name: string) => {
        setName(name);
        setStep(step + 1);
    };
  return (
    <div className="max-w-[40%] ">
        {step === 1 && <FormName onSubmit={handleFormSubmit} />}
        {step === 2 && <FormNumbers name={name} />}
        {step === 3 && <FormResult />}
    </div>
  );
};

export default Form;
