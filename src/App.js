import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import "./api";
import searchImages from "./api";

function App() {
    const [images, setImages] = useState([]);
    const handleSearch = async (term) => {
        const result = await searchImages(term);
        setImages(result);
        console.log('A search was made for : "', term, '"');
    };
    return (
        <div>
            <SearchBar onSubmit={handleSearch} />
            <ImageList images={images} />
        </div>
    );
}

export default App;
