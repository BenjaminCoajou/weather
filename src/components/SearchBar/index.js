import React from 'react';

import './style.css';

const SearchBar = ({city, inputChange, formSubmit}) => {
    console.log("city",city);
    
    return (
    
        <div className="row">
            <div className="col-6  mt-5">
            <form onSubmit={(evt)  => {evt.preventDefault();formSubmit() }}>
                <label htmlFor="inputCity" className="form-label display-4">City</label>
                <input type="text" id="inputCity" className="form-control" placeholder="Search a city" onChange={(evt) => {inputChange(evt.target.value)}}/>
            </form>
            </div>
            
        </div>
   
  )};

export default SearchBar;
