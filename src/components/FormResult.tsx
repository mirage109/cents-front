interface FormResultProps {
  name: string;
  number1: string;
  number2: string;
  sum: number;
  onClick: () => void;
}

const FormResult: React.FC<FormResultProps> = ({
  name,
  number1,
  number2,
  sum,
  onClick: handleRevial,
}) => {
  return (
    <div className="p-10 font-bebas text-xl flex flex-col justify-center items-center gap-4 text-primary">
      <h3>
        <span className="text-secondary">{name}</span>, your numbers were:
      </h3>
      <p className="font-bold text-3xl text-secondary">
        {number1} <span className="text-xl text-primary font-normal"> and</span>{" "}
        {number2}
      </p>
      <p>
        And the sum is:{" "}
        <span className="font-bold text-3xl text-secondary">{sum}</span>
      </p>
      <p>So, What was the third number? </p>
      <button
        onClick={handleRevial}
        className="border-2 border-secondary rounded-md p-2 bg-secondary text-white w-2/3 hover:bg-white hover:text-secondary hover:border-secondary transition duration-500 ease-in-out"
      >
        Revial
      </button>
    </div>
  );
};

export default FormResult;
