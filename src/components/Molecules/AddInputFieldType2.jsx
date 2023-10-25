import { useState } from "react";

const AddInputFieldType2 = ({ btnName, placeholder, data, passData }) => {
  const [inputFields, setInputFields] = useState(["", "", ""]);

  const AddInputField = () => {
    setInputFields([...inputFields, "", "", ""]);
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
      <div className="flex flex-col items-start">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-s font-bold py-2 px-4 rounded my-2 px-2 h-9"
          onClick={AddInputField}>
          {btnName}
        </button>
        <div className="flex flex-col gap-2 m-3">
          {inputFields.map((field, index) => (
            <div key={index} className="flex flex-row gap-3  m-2 items-center">
              <input
                type="text"
                value={field}
                placeholder={placeholder[index]}
                onChange={(e) => {
                  const newFields = [...inputFields];
                  newFields[index] = e.target.value;
                  setInputFields(newFields);
                  passData(newFields);
                }}
                className="h-8 border-solid border-2 border-black w-64"
              />
              <button
                onClick={() => removeInputField(index)}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-1 border border-blue-500 hover:border-transparent rounded h-8">
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddInputFieldType2;
