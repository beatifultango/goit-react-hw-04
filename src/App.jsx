import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { Toaster, toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import ImageGallery from "./ImageGallery";
import "./App.css";
import { fetchPhotos } from "./PhotosApi";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

function App() {
  const warning = () => {
    toast("Please search an image", {
      position: "top-center",
      duration: 2000,
      icon: "🥱",
    });
  };

  useEffect(() => {
    fetchPhotos();
  }, []);
  const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (searchTerm) => {
    try {
      setIsLoading(true);
      const data = await fetchPhotos(searchTerm);
      console.log(data);
      setPhotos(data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isloading) return <Loader />;

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
      {error && <ErrorMessage />}
      <ImageGallery photos={photos} />
    </>
  );
}

export default App;
