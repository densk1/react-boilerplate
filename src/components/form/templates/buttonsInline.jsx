import React from 'react';
import PropTypes from 'prop-types';


const buttonsInline = ({ saveDisabled, clearDisabled, onClick }) => (
  <div className="form-group row">
    <div className="col-7 text-center mt-4">
      <button
        className="btn btn-success w-100 "
        type="submit"
        disabled={saveDisabled}
      >
        Save
      </button>
    </div>
    <div className="col-5 text-center mt-4">
      <button
        className={`btn w-100 ${(clearDisabled ? 'btn-outline-secondary' : 'btn-outline-danger')}`}
        type="submit"
        disabled={clearDisabled}
        onClick={onClick}
      >
        Clear
      </button>
    </div>
  </div>
);

buttonsInline.propTypes = {
  saveDisabled: PropTypes.bool.isRequired,
  clearDisabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default buttonsInline;
