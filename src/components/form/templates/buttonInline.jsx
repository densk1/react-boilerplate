import React from 'react';
import PropTypes from 'prop-types';
/*
<Field
name={'add'}
component={ButtonInline}
saveDisabled={submitting}
text={"Add User"}
/>
*/

const buttonsInline = props => (
  <div>
    <button
      className="btn btn-success w-100"
      type="submit"
      disabled={props.saveDisabled}
    >
      {props.text}
    </button>
  </div>
);
buttonsInline.propTypes = {
  text: PropTypes.string.isRequired,
  saveDisabled: PropTypes.bool.isRequired,
};

export default buttonsInline;
