import ReachTheTop from "./components/reach-the-top.png";
import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import "./api";
import searchImages from "./api";

function App() {
    const [animate, setAnimate] = useState(false);

    const [searchedterm, setsearchedterm] = useState("");
    const handlesearchedterm = (term) => {
        setsearchedterm(`Search results for "${term}"`);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 1000);
    };

    const [images, setImages] = useState([]);
    const handleSearch = async (term) => {
        const result = await searchImages(term);
        setImages(result);
        console.log('A search was made for : "', term, '"');
    };
    return (
        <div className="main-wrapper" id="top">
            <SearchBar
                onSubmit={handleSearch}
                searchedterm={handlesearchedterm}
            />
            {searchedterm && (
                <h4 className={`searched ${animate ? "slide-in" : ""}`}>
                    {searchedterm}
                </h4>
            )}
            <ImageList images={images} />
            {searchedterm && (
                <a href="#top" style={{ display: "block" }}>
                    <img
                        className="reach-the-top-image"
                        src={ReachTheTop}
                        alt="reach-the-top"
                        title="reach-the-top"
                    />
                </a>
            )}
        </div>
    );
}

export default App;
