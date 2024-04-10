interface FormResultProps {
  name: string;
  number1: string;
  number2: string;
  sum: number;
}

const FormResult: React.FC<FormResultProps> = ({ name, number1, number2, sum }) => {
  return (
    <div>
      <h3>{name}, your nembers were:</h3>
      <ul>
        <li>{number1}</li>
        <li>{number2}</li>
      </ul>
      <p>I will add them and add a third random number to the sum.</p>
      <p>And the sum is: {sum}</p>
      <p>Thanks!</p>
    </div>
  );
};

export default FormResult;
