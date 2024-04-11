interface FormRevialProps {
  sum: number;
  number1: string;
  number2: string;
}

const FormRevial: React.FC<FormRevialProps> = ({ sum, number1, number2 }) => {
  const result = sum - parseInt(number1) - parseInt(number2);
  const restart = () => {
    window.location.reload();
  };
  return (
    <div className=" flex flex-col justify-center items-center h-full">
      <div className="font-bebas text-8xl text-primary">{result}</div>
      <button
        onClick={restart}
        className="border-2 font-bebas text-xl border-secondary rounded-md p-2 bg-secondary text-white w-2/3 hover:bg-white hover:text-secondary hover:border-secondary transition duration-500 ease-in-out"
      >
        Restart
      </button>
    </div>
  );
};

export default FormRevial;
