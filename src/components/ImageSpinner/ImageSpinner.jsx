import React from 'react';
import "./ImageSpinner.css"

const GalleryImageSpinner = ({spinnerContainer, spinnerType}) => {
    return (
        <div className={spinnerContainer}>
          <div className={`${spinnerType} spinner-border`} role="status">
          </div>
        </div>
    );
};

export default GalleryImageSpinner;