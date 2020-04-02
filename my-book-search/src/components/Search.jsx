import React from 'react';

const Search = (props) => {
    return (
        <div className="search-field">
            <form onSubmit={props.searchBooks} action="GET">
                <input className="searchText" type="text" /><button onClick={props.handleSearch}>Submit</button>
            </form>
        </div>
    )
}

export default Search;