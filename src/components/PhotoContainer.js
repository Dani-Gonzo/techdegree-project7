import React, {Component} from 'react';
import Photo from './Photo.js';
import NotFound from './NotFound.js';

class PhotoContainer extends Component {
    render() {
        return(
            <div className="results">
                <p>TestPhotoContainer</p>
                <Photo />
                <NotFound />
            </div>
        );
    }
}

export default PhotoContainer;