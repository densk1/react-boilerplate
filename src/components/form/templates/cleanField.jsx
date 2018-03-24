import React from 'react';
import PropTypes from 'prop-types';
import displayContactCard from './displayContactCard';

const cleanField = ({
  input,
  type,
  showPlaceholder,
  placeholder,
  isContactCard,
  meta,
  specialValidation,
}) => {
  const thisType = type || 'text';
  return (
    <div>
      <input
        {...input}
        type={thisType}
        placeholder={showPlaceholder ? (placeholder || '') : ''}
        {...displayContactCard(
          isContactCard,
          (meta.touched && meta.error),
          specialValidation,
        )}
      />
      { meta.touched && meta.error &&
        <span className="error small text-danger m-0 p-0">
          {meta.error}
        </span>
      }
    </div>
  );
};

cleanField.defaultProps = {
  type: '',
  showPlaceholder: false,
  placeholder: '',
  isContactCard: false,
  specialValidation: false,
};

cleanField.propTypes = {
  input: PropTypes.instanceOf(Object).isRequired,
  type: PropTypes.string,
  showPlaceholder: PropTypes.bool,
  placeholder: PropTypes.string,
  isContactCard: PropTypes.bool,
  meta: PropTypes.instanceOf(Object).isRequired,
  specialValidation: PropTypes.bool,
};

export default cleanField;
