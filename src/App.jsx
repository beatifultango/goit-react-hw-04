import { useState } from "react";
import SearchBar from "./components/searchBar";
import { Toaster, toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  const warning = () => {
    toast("Please search an image", {
      position: "top-center",
      duration: 2000,
      icon: "🥱",
    });
  };
  const [search, setSearch] = useState("");

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    console.log("searched term", searchTerm);
  };

  return (
    <>
      <Toaster
        toastOptions={{
          
          style: {
            color: "#ced4de",
            backgroundColor:"#2a64d1"
          },
        }}
      />
      <SearchBar onSearch={handleSearch} onClick={warning} />
    </>
  );
}

export default App;
