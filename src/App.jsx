import { useState } from "react";
import SearchBar from "./components/searchBar";
import { Toaster, toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import ImageGallery from "./ImageGallery";

import "./App.css";
import { fetchPhotos } from "./PhotosApi";

function App() {
  const warning = () => {
    toast("Please search an image", {
      position: "top-center",
      duration: 2000,
      icon: "🥱",
    });
  };
  const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (searchTerm) => {
    try {
      setLoading(true);
      const data = await fetchPhotos(searchTerm);
      console.log(data);
      setPhotos(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            color: "#ced4de",
            backgroundColor: "#2a64d1",
          },
        }}
      />
      <SearchBar onSearch={handleSearch} onClick={warning} />
      <ImageGallery photos={photos} />
    </>
  );
}

export default App;
