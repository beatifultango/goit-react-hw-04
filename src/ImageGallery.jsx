import React from "react";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {photos.map(({ id, title, url }) => (
          <li key={id} className={css.perPhoto}>
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
