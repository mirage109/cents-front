import Form from "./components/Form";
import logo from "./assets/logo.svg";

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-center items-center gap-4 py-6">
        <h1 className="text-4xl font-bold mb-2">My test app for</h1>
        <img src={logo} alt="logo" />
      </div>
      <Form />
    </div>
  );
}
