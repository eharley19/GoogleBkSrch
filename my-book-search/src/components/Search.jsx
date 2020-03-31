import React from 'react';

const Search = (props) => {
    return (
        <div className="search-field">
            <form action="GET">
                <input type="text" onChange={props.handleSearch}/><button>Submit</button>
            </form>
        </div>
    )
}

export default Search;