import React from 'react';
import Nav from './Nav.js';
import PhotoContainer from './PhotoContainer.js';
import Search from './Search.js';

const App = () => {
  return (
    <div className="gallery">
      <Search />
      <Nav />
      <PhotoContainer />
    </div>
  );
}

export default App;