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
      <FormName onSubmit={handleFormSubmit}  />
      <FormNumbers name={name} />
      <FormResult />
    </div>
  );
};

export default Form;
