import React, { memo } from "react";
import { IoIosClose } from "react-icons/io";

const LocalImages = ({ files, setFiles }) => {
  const handleRemoveImage = (index) => {
    console.log(index);
    setFiles((prev) => [...prev].filter((_, inx) => inx !== index));
  };
  return (
    <div>
      <div className="local__images">
        {Object.values(files)?.map((image, index) => (
          <div key={index} className="local__image">
            <img src={URL.createObjectURL(image)} width={100} alt="" />
            <IoIosClose onClick={() => handleRemoveImage(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(LocalImages);
