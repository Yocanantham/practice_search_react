import { useState } from "react";

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
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Enter your search term</label>
                <input onChange={handleChange} value={term}></input>
            </form>
        </div>
    );
}

export default SearchBar;
