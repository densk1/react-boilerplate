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

cleanField.propTypes = {
  input: PropTypes.instanceOf(Object).isRequired,
  type: PropTypes.string.isRequired,
  showPlaceholder: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  isContactCard: PropTypes.bool.isRequired,
  meta: PropTypes.instanceOf(Object).isRequired,
  specialValidation: PropTypes.instanceOf(Object).isRequired,
};

export default cleanField;
