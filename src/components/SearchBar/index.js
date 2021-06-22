import React from 'react';

import './style.css';

const SearchBar = ({inputChange, formSubmit, error}) => {
    
    return (
    
        <div className="row mx-5">
            <div className="col-xl-3 col-md-6 mt-5">
                <form onSubmit={(evt)  => {evt.preventDefault();formSubmit() }}>
                    <label htmlFor="inputCity" className="form-label display-4">City</label>
                    <input type="text" id="inputCity" className="form-control" placeholder="Search a city" onChange={(evt) => {inputChange(evt.target.value)}}/>
                </form>
                {error ? 
                <div className="mt-2 d-flex align-items-baseline incorrect">
                    <i class="fas fa-exclamation-triangle mx-2"></i>
                    <p>Incorrect City</p>
                </div> : "" }
            </div>
            
        </div>
   
  )};

export default SearchBar;
