interface FormNumbersProps {
  name: string;
}
const FormNumbers:React.FC<FormNumbersProps> = ({name}) => {
  return (
    <div className="flex flex-col">
      <label>{name} What are your favourite numbers?</label>
      <input type="text" placeholder="Your first number " />
      <input type="text" placeholder="Your second number" />
      <button>Next Step</button>
    </div>
  );
};

export default FormNumbers;
