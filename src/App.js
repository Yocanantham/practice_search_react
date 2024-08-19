import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import "./api";
import searchImages from "./api";

function App() {
    searchImages();
    const handleSearch = (term) => {
        console.log("Communication made", term);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSearch} />
            <ImageList />
        </div>
    );
}

export default App;
