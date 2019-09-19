import React, {Component} from 'react';
import Nav from './Nav.js';
import PhotoContainer from './PhotoContainer.js';
import Search from './Search.js';
import apiKey from '../config.js';

const key = apiKey;

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=turtle&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({photos: responseData.photos.photo});
      })
      .catch(error => {
        console.log('Error fetching data', error);
      });
  }

  render() {
    console.log(this.state.photos);
    return (
      <div className="gallery">
        <Search />
        <Nav />
        <PhotoContainer />
      </div>
    );
  }
}