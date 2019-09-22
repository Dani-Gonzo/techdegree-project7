import React, {Component} from 'react';
import Nav from './Nav.js';
import PhotoContainer from './PhotoContainer.js';
import Search from './Search.js';
import apiKey from '../config.js';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';

const key = apiKey;

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentDidMount() {
    this.search();
  }

  search = (tag = 'ocean') => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          photos: responseData.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching photos', error);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="gallery">
          <Search onSearch={this.search}/>
          <Nav />
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <PhotoContainer data={this.state.photos} />
          }
        </div>
      </BrowserRouter>
    );
  }
}