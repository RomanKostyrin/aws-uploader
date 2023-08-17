import React from "react";

const ImageItem = ({ path }) => {
  return (
    <div>
      <img src={path} width="200" />
    </div>
  );
};

export default ImageItem;
