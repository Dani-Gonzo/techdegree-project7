import React, {Component} from 'react';
import Nav from './Nav.js';
import PhotoContainer from './PhotoContainer.js';
import Search from './Search.js';
import FourOhFour from './404.js';
import apiKey from '../config.js';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

const key = apiKey;

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      photos: []
    };
  }

  componentDidMount() {
    this.search("cookie");
  }

  search = (tag) => {
    this.setState({
      loading: true
    });
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
          <Nav onSearch={this.search}/>

          {
            (this.state.loading)
            ? <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading Icon" />
            : <Switch>
                <Route exact path="/" render={() => <Redirect to="/search/cookie" />} />
                <Route path="/search/:tag" render={(props) => <PhotoContainer data={this.state.photos} {...props} />} />
                <Route component={FourOhFour} />
              </Switch>
          }
          
        </div>
      </BrowserRouter>
    );
  }
}