const DisplayIngredient = ({ ingredient }) => {
  console.log(ingredient);
  return (
    <div>
      <p className="text-2xl m-0">List of ingredients : </p>
      <ul>
        {ingredient.map((field, index) => {
          return (
            <li key={index} className="my-1 mx-4 list-decimal">
              {field.name} {field.quantity} {field.units}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayIngredient;
