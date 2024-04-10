import React, { useState } from "react";

interface FormNameProps {
  onSubmit: (name: string) => void;
}

const FormName: React.FC<FormNameProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit:React.MouseEventHandler<HTMLButtonElement> 
   = (event) => {
    event.preventDefault();
    onSubmit(name);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <form >
      <div className="flex flex-col">
        <label>Hi! Please enter your name!</label>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={handleNameChange}
        />
        <button type="button" onClick={handleSubmit}>
          Next Step
        </button>
      </div>
    </form>
  );
};

export default FormName;
