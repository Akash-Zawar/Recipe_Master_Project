import { useState } from "react";

const AddInputFieldType1 = ({ btnName, placeholder, data, passData }) => {
  const [inputFields, setInputFields] = useState([{ description: "" }]);

  const AddInputField = () => {
    setInputFields([...inputFields, { description: "" }]);
  };

  const handleInputChange = (index, key, event) => {
    const newInputFields = [...inputFields];
    newInputFields[index][key] = event.target.value;
    setInputFields(newInputFields);
    passData(newInputFields);
  };

  const removeInputField = (index) => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
    passData(newInputFields);
  };
  // console.log({ inputFields });

  return (
    <div>
      <div className="flex flex-row  items-start">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-1 border border-blue-500 hover:border-transparent rounded h-8"
          onClick={AddInputField}>
          {btnName}
        </button>
        <div className="flex flex-col gap-2 mx-3">
          {inputFields.map((field, index) => (
            <div key={index} className="flex flex-row gap-3 mx-2 items-center">
              <input
                type="text"
                value={field.description}
                placeholder={placeholder}
                onChange={(event) =>
                  handleInputChange(index, "description", event)
                }
                className="h-8 border-solid border-2 border-black w-72 p-2"
              />
              <button
                onClick={() => removeInputField(index)}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-1 border border-blue-500 hover:border-transparent rounded h-8">
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddInputFieldType1;
