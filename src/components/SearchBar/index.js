import React from 'react';

import './style.css';

const SearchBar = ({inputChange, formSubmit, error}) => {
    
    return (
    
        <div className="row">
            <div className="col-md-6  mt-5">
                <form onSubmit={(evt)  => {evt.preventDefault();formSubmit() }}>
                    <label htmlFor="inputCity" className="form-label display-4">City</label>
                    <input type="text" id="inputCity" className="form-control" placeholder="Search a city" onChange={(evt) => {inputChange(evt.target.value)}}/>
                </form>
                {error ? 
                <div className="alert alert-danger">
                    Incorect City
                </div> : "" }
            </div>
            
        </div>
   
  )};

export default SearchBar;
