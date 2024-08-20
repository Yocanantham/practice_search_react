import { useState } from "react";
import "./SearchBar.css";
function SearchBar(props) {
    const onSubmit = props.onSubmit;

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
                <label className="search-heading">Enter your search term</label>
                <input
                    className="search-input"
                    onChange={handleChange}
                    value={term}></input>
            </form>
        </div>
    );
}

export default SearchBar;
