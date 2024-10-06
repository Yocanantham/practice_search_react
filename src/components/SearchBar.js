import { useState } from "react";
import "./SearchBar.css";
function SearchBar(props) {
    const onSubmit = props.onSubmit;
    const searchedterm = props.searchedterm;

    const handleClick = () => {
        onSubmit(term);
        searchedterm(term);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
        searchedterm(term);
    };

    const [term, setTerm] = useState("");

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div className="search-bar-main">
            <form className="search-form" onSubmit={handleFormSubmit}>
                <label className="search-heading font-customized-A">
                    Images Search ylabcd
                </label>
                <input
                    className="search-input font-customized-A"
                    onChange={handleChange}
                    value={term}
                    placeholder="Enter your search term"></input>
            </form>
            <button
                className="search-button font-customized-B"
                onClick={handleClick}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;
