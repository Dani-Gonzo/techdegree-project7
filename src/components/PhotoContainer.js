import React from 'react';
import Photo from './Photo.js';
import NotFound from './NotFound.js';

const PhotoContainer = props => {

    // Extracts search term from route parameter and uses regex to relace underscores with spaces for results title
    let title = props.match.params.tag;
    title = title.replace(/_/g, " ");

    const results = props.data;
    let photos;
    if (results.length > 0) {
        photos = results.map(photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />);
    } else {
        photos = <NotFound />
    }

    return(
        <div className="photo-container">
            <h2>{title}</h2>
            <ul>
                {photos}
            </ul>
        </div>
    );
}

export default PhotoContainer;