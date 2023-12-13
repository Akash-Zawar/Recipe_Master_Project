import React, { useState } from "react";

const RecipeImages = ({ Image }) => {
  const [count, setCount] = useState(0);
  const onPrevClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const onNextClick = () => {
    if (count < Image.length - 1) {
      setCount(count + 1);
    }
  };
  console.log("image", Image);
  console.log(count);
  return (
    <div>
      <div>
        <div className="flex flex-col gap-4 mx-1 items-center">
          <div className="flex gap-2 items-center">
            <button
              onClick={onPrevClick}
              className="bg-med-brown-coffee w-14 h-10 rounded-2xl">
              Prev
            </button>
            <img
              src={Image[count].description}
              className="rounded-3xl max-h-48 max-w-sm"
            />
            <button
              onClick={onNextClick}
              className="bg-med-brown-coffee w-14 h-10 rounded-2xl">
              Next
            </button>
          </div>
          <div className="flex gap-4">
            {Image.map((img, index) => {
              return (
                <img key={index} src={img.description} alt="" width="75px" />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeImages;
