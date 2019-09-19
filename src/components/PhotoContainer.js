import React from 'react';
import Photo from './Photo.js';
import NotFound from './NotFound.js';

const PhotoContainer = props => {

const results = props.data;
let photos = results.map(photo => 
    <Photo url={`farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />
);

    return(
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {photos}
            </ul>
            <NotFound />
        </div>
    );
}

export default PhotoContainer;