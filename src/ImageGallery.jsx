import React from "react";

const ImageGallery = ({ photos }) => {
  return (
    <div>
      <ul>
        {photos.map(({ id, title, url }) => (
          <li key={id}>
            <div>
              <img src={url} alt={title} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
