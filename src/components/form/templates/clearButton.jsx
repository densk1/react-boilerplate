import React from 'react';

const clearButton = ({ clearDisabled, onClick, text }) => (
  <div>
    <button
      className={`btn w-100 ${(clearDisabled ? 'btn-outline-secondary' : 'btn-outline-danger')}`}
      type="submit"
      disabled={clearDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  </div>
);

export default clearButton;


/*
<Field
name="clear"
component={clearButton}
clearDisabled={pristine || submitting}
onClick={reset}
/>

*/
