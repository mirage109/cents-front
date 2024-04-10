import FormName from "./FormName"
import FormNumbers from "./FormNumbers"
import FormResult from "./FormResult"

const Form = () => {
  return (
    <div className="max-w-[40%] ">
    <FormName />
    <FormNumbers />
    <FormResult />
    </div>
  )
}

export default Form