import React from 'react';
import { BsSearch } from "react-icons/bs";
import "./_search.scss";

const Search = () => {
    return (
        <div className="search-container">
            <div className="search-container-search-box">
                <BsSearch className="icon"/>
                {/* <p>Search Medical Books</p> */}
                <input placeholder="Search Medical Books" className="hello" type="text"/>
            </div>
        </div>
    )
}

export default Search
