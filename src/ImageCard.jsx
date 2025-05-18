import React from "react";

const ImageCard = ({ url, title }) => {
  return (
    <div>
      <div>
        <img src={url} alt={title} />
      </div>
    </div>
  );
};

export default ImageCard;
