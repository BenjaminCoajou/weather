import React from 'react';
import './App.css';

import Home from '../../containers/Home';

const App = () => {
  let d = new Date();
  let image = document.body;
  if(d.getHours() > 8 && d.getHours() < 18) {
    image.style.backgroundImage = "url(https://i.pinimg.com/originals/a7/f4/26/a7f4267372b13423aa8cbd691a0b279c.jpg)";    
  }
  else {
    image.style.backgroundImage = "url(https://i.redd.it/tilhltqozyw41.png)"
  }
  return (
    <div className="App">
      <Home/>
    </div>
  )};

export default App;
