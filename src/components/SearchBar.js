import { useState } from "react";
import "./SearchBar.css";
function SearchBar(props) {
    const onSubmit = props.onSubmit;

    const handleClick = () => {
        onSubmit(term);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    const [term, setTerm] = useState("");

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div className="search-bar-main">
            <form className="search-form" onSubmit={handleFormSubmit}>
                <label className="search-heading">Images Search</label>
                <input
                    className="search-input"
                    onChange={handleChange}
                    value={term}
                    placeholder="Enter your search term"></input>
            </form>
            <button className="search-button" onClick={handleClick}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;
