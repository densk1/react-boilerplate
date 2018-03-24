import React from 'react';
import PropTypes from 'prop-types';

const UploaderBar = ({
  dragEnter,
  decimalProgressWidth,
  progressWidth,
  arraySize,
}) => (
  <div style={{ position: 'relative', backgroundColor: `rgba(40, 167, 69, ${decimalProgressWidth} )` }}>
    {!arraySize ?
      <div className={`p-5 ${dragEnter ? ' text-white' : ' text-success'}`}>
        Drop your <strong>.CSV</strong> files here to upload.
      </div>
      :
      <div className="p-5 text-center">
        <div
          className="bg-success"
          style={{
            position: 'absolute', margin: 0, padding: 0, left: 0, top: 0, height: '100%', width: `${progressWidth}%`,
          }}
        >
          &nbsp;
        </div>
        <div style={{ position: 'relative', zIndex: 99999 }}>
          <span
            className=" text-white p-2 rounded"
            style={{ position: 'relative', zIndex: 9999999 }}
          >
            {progressWidth && progressWidth.toFixed(1)} %
          </span>
        </div>
      </div>
    }
  </div>
);
UploaderBar.propTypes = {
  dragEnter: PropTypes.bool.isRequired,
  decimalProgressWidth: PropTypes.number.isRequired,
  progressWidth: PropTypes.number.isRequired,
  arraySize: PropTypes.bool.isRequired,
};


export default UploaderBar;
