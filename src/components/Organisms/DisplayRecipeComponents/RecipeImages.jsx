import React from "react";

const RecipeImages = ({ Image }) => {
  console.log({ Image });
  return (
    <div>
      <div>
        <div className="flex mx-1 items-center">
          <img src="" alt="" />
          {Image.map((img, index) => {
            return (
              <img key={index} src={img.description} alt="" width="300px" />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecipeImages;
