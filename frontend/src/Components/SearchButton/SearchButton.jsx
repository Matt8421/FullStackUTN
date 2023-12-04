import React from "react";
import "./SearchButton.css"


const SearchButton = (props) => {
    return (
        <>
        <div className="searchBorder fondoContact">
            <i className="bi bi-search searchMargin fondoContact"></i>
            <input className="inputStyle fondoContact" type="text" placeholder={props.placeholder}/>    
        </div>
            
        </>
    )
}

export default SearchButton