import React from 'react';

const Photo = ({ photo, children }) => {
  return (
    <div className="photo">
      {children}
      <h2>{photo.title}</h2>
      <p>{photo.description}</p>
    </div>
  );
};

export default Photo;