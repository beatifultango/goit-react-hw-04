import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { Toaster, toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import ImageGallery from "./ImageGallery";
import "./App.css";
import { fetchPhotos } from "./PhotosApi";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn";
import ImageModal from "./ImageModal";

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
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [alt, setAlt] = useState("");
  useEffect(() => {
    const fetchImages = async (image) => {
      const images = await fetchPhotos(image);
      setPhotos(images);
    };
  });

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
  const loadMore = async () => {
    setIsLoading(true);
    const nextPage = page + 1;

    const response = await fetchPhotos(nextPage);

    setPhotos((prev) => [...prev, ...response]);
    setPage(nextPage);
    setIsLoading(false);
  };

  const handleModal = (image) => {
    setSelectedImage(image);
    setAlt(image.title || "") ;
    setModalIsOpen(true);
  };
  const closeModal=()=>{

    setSelectedImage(null);
    setModalIsOpen(false);

  }

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
      <ImageGallery photos={photos} onClick={handleModal} />
      {selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          imgSrc={selectedImage.url}
          altText={selectedImage.title}
        />
      )}
      <LoadMoreBtn load={loadMore} />
    </>
  );
}

export default App;
