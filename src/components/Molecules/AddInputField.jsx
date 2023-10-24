import { useState } from "react";

const AddInputField = ({ btnName, placeholder }) => {
  const [inputFields, setInputFields] = useState([""]);

  const AddInputField = () => {
    setInputFields([...inputFields, ""]);
  };

  const handleInputChange = (index, event) => {
    const newInputFields = [...inputFields];
    newInputFields[index] = event.target.value;
    setInputFields(newInputFields);
  };

  const removeInputField = (index) => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };

  return (
    <div>
      <div className="flex flex-col items-start">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded my-2 px-2 h-9"
          onClick={AddInputField}>
          {btnName}
        </button>
        <div className="flex flex-col gap-2 m-3  ">
          {inputFields.map((field, index) => (
            <div key={index} className="flex flex-row gap-3g m-2 items-center">
              <input
                type="text"
                value={field}
                placeholder={placeholder}
                onChange={(event) => handleInputChange(index, event)}
                className="h-8"
              />
              <button
                onClick={() => removeInputField(index)}
                className="bg-blue-300 hover:bg-blue-500 text-white text-xs py-2 px-2 rounded my-2 px-2 h-8">
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddInputField;
