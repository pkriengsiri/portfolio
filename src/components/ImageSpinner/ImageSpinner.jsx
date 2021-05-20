import React from 'react';
import "./ImageSpinner.css"

const GalleryImageSpinner = ({spinnerUse, spinnerType}) => {
    return (
        <div className={spinnerUse}>
          <div className={`${spinnerType} spinner-border`} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
    );
};

export default GalleryImageSpinner;