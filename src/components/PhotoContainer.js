import React, {Component} from 'react';
import Photo from './Photo.js';
import NotFound from './NotFound.js';

export default class PhotoContainer extends Component {
    render() {
        return(
            <div className="results">
                <ul>
                   <Photo /> 
                </ul>
                <NotFound />
            </div>
        );
    }
}
