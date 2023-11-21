import { useState } from "react";

const AddInputFieldType2 = ({ btnName, placeholder, data, passData }) => {
  const [inputFields, setInputFields] = useState([
    { name: "", quantity: "", units: "" },
  ]);

  const AddInputField = () => {
    setInputFields([...inputFields, { name: "", quantity: "", units: "" }]);
  };

  const isNameValid = (name) => {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(name);
  };

  const isQuantityValid = (quantity) => {
    const regex = /^\d+(\.\d+)?$/;
    return regex.test(quantity);
  };

  const isUnitValid = (units) => {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(units);
  };

  const removeInputField = (index) => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
    passData(newInputFields);
  };

  const handleInputChange = (index, fieldName, value) => {
    const newFields = [...inputFields];
    newFields[index][fieldName] = value;
    setInputFields(newFields);
    passData(newFields);
  };

  // console.log({ inputFields });

  return (
    <div>
      <div className="flex gap-4 items-start">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-1 border border-blue-500 hover:border-transparent rounded h-88"
          onClick={AddInputField}>
          {btnName}
        </button>
        <div className="flex flex-col gap-2 ">
          {inputFields.map((field, index) => (
            <div key={index} className="flex flex-row gap-2 items-center">
              <input
                type="text"
                value={field.name}
                placeholder={placeholder[0]}
                onChange={(e) => {
                  if (isNameValid(e.target.value)) {
                    handleInputChange(index, "name", e.target.value);
                  }
                }}
                className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-950 w-72"
              />
              <input
                type="text"
                value={field.quantity}
                placeholder={placeholder[1]}
                onChange={(e) => {
                  if (isQuantityValid(e.target.value)) {
                    handleInputChange(index, "quantity", e.target.value);
                  }
                }}
                className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-950 w-32"
              />
              <input
                type="text"
                value={field.units}
                placeholder={placeholder[2]}
                onChange={(e) => {
                  if (isUnitValid(e.target.value)) {
                    handleInputChange(index, "units", e.target.value);
                  }
                }}
                className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-950 w-32"
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

export default AddInputFieldType2;
