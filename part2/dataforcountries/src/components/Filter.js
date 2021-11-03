import React from "react";

const Filter = ({handleNewSearch}) => {
    return (
        <div>Search: <input onChange={handleNewSearch}/></div>
    )
}

export default Filter;

