import React from "react";
import css from "./ImageGallery.module.css";
import ImageCard from "./ImageCard";

const ImageGallery = ({ photos }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {photos.map(({ id, title, url }) => (
          <li key={id} className={css.perPhoto}>
            <ImageCard url={url} title={title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
