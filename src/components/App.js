import React, {Component} from 'react';
import Nav from './Nav.js';
import PhotoContainer from './PhotoContainer.js';
import NotFound from './NotFound';
import Search from './Search.js';
import apiKey from '../config.js';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

const key = apiKey;

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      photos: [],
      seaTurtlePhotos: [],
      catPhotos: [],
      matchaPhotos: []
    };
  }

  componentDidMount() {
    this.getPhotos("cookie").then(responseData => {
      if (!responseData) {
        return;
      }
      this.setState({
        photos: responseData.photos.photo
      });
    });

    this.getPhotos("sea_turtle").then(responseData => {
      if (!responseData) {
        return;
      }
      this.setState({
        seaTurtlePhotos: responseData.photos.photo
      });
    });

    this.getPhotos("cat").then(responseData => {
      if (!responseData) {
        return;
      }
      this.setState({
        catPhotos: responseData.photos.photo
      });
    });

    this.getPhotos("matcha_tea").then(responseData => {
      if (!responseData) {
        return;
      }
      this.setState({
        matchaPhotos: responseData.photos.photo
      });
    });
  }

  getPhotos = (query) => {
    return fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
              .then(response => response.json())
              .catch(error => {
                console.log('Error fetching photos', error);
              });
  }

  search = (tag = "cookie") => {
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
          <Route path="/" render={(props) => <Search {...props} onSearch={this.search}/> } /> 
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/search/cookie" />} />
            <Route path="/search/:tag" render={(props) => { this.search(props.match.params.tag); return <PhotoContainer data={this.state.photos} />}} />
            <Route path="/turtles" render={() => <PhotoContainer data={this.state.seaTurtlePhotos} />} />
            <Route path="/cats" render={() => <PhotoContainer data={this.state.catPhotos} />} />
            <Route path="/matcha_tea" render={() => <PhotoContainer data={this.state.matchaPhotos} />} />
            <Route component={NotFound} />
          </Switch>
            
          
          {/* {
            (this.state.loading)
            ? <p>Loading...</p>
            : <PhotoContainer data={this.state.photos} />
          } */}
        </div>
      </BrowserRouter>
    );
  }
}