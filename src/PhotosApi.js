import axios from "axios";
import ImageGallery from "./ImageGallery";

const accesKey="eM5-aFoDa5BIogLJlObB2aMl20b3DDIZyC2SsBqZDx4";

// const accesKey = "7bIcctmuYmeFBow5DtfhRgngtQvXX_l8fyk46UTBA_M";
axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = `Client-ID ${accesKey}`;

export const fetchPhotos = async (search) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: search,
    },
  });
  return response.data.results.map((photo) => ({
    id: photo.id,
    title: photo.title,
    url: photo.urls.small,
  }));
};
