import React, { useState } from "react";

interface FormNameProps {
  onSubmit: (name: string) => void;
}

const FormName: React.FC<FormNameProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    onSubmit(name);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className="p-14 font-bebas text-xl flex flex-col justify-center items-center gap-6 text-primary ">
      <label>Hi! Please enter your name!</label>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={handleNameChange}
        className="border border-primary rounded-md p-2 w-2/3"
      />
      <button type="button" onClick={handleSubmit} className="border-2 border-secondary rounded-md p-2 bg-secondary text-white w-2/3 hover:bg-white hover:text-secondary hover:border-secondary transition duration-500 ease-in-out">
        Next Step
      </button>
    </div>
  );
};

export default FormName;
