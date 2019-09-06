import React from 'react';
import Nav from 'Nav.js';
import NotFound from 'NotFound.js';
import PhotoContainer from 'PhotoContainer.js';
import Search from 'Search.js';

const App = () => {
  return (
    <div className="gallery">
      <Search />
      <Nav />
      <PhotoContainer />
      <NotFound />
    </div>
  )
}