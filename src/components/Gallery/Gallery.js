import './Gallery.css';
import React from 'react';
import Photo from '../Photo/Photo';

const Gallery = ({ photos }) => {
  return (
    <div className="gallery">
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo}>
          <img src={photo.url} alt={photo.title} />
        </Photo>
      ))}
    </div>
  );
};

export default Gallery;