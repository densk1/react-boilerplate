import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import CleanField from '../../form/templates/cleanField';
import { validate } from './formControl';
import ButtonInline from '../../form/templates/buttonInline';
import ClearButton from '../../form/templates/clearButton';

const formClass = 'card card-body col-xs-12 offset-sm-1 col-sm-10 offset-md-1 col-md-10 mb-3';

const AddUserForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  onSuccess,
}) => {
  const fieldSetup = {
    component: CleanField,
  };
  const onSuccessClassName = ' custom-form-success-outline';
  const successClassName = onSuccess ? formClass + onSuccessClassName : formClass;
  return (
    <form onSubmit={handleSubmit} className={successClassName}>
      <div className="form-group row mb-0 pb-0">
        <div className="col-12">
          <h4 className="text-success text-center">Add User</h4>
        </div>
      </div>
      <div className="form-group row mb-0 pb-0">
        <div className="col-12 col-sm-6 mb-sm-0 mb-0">
          <div className="form-group row m-0 p-0">
            <label htmlFor="firstName" className="col-12 col-form-label text-muted mb-0 pb-0 pl-0"><small>First Name</small></label>
            <div className="col-12 p-0 m-0">
              <Field
                name="firstName"
                {...fieldSetup}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 mb-sm-0 mb-0">
          <div className="form-group row m-0 p-0">
            <label htmlFor="secondName" className="col-12 col-form-label text-muted mb-0 pb-0 pl-0"><small>Last Name</small></label>
            <div className="col-12 p-0 m-0">
              <Field
                name="secondName"
                {...fieldSetup}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="form-group row mb-0 pb-0">
        <label htmlFor="email" className="col-12 col-form-label text-muted mb-0 pb-0 "><small>Email</small></label>
        <div className="col-12 pb-0 mb-0">
          <div>
            <Field
              name="email"
              {...fieldSetup}
            />
          </div>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-12 col-sm-6 mb-sm-2 mb-1">
          <div className="form-group row m-0 p-0">
            <label htmlFor="password" className="col-12 col-form-label text-muted mb-0 pb-0 pl-0"><small>Password</small></label>
            <div className="col-12 p-0 m-0">
              <div>
                <Field
                  name="password"
                  type="password"
                  {...fieldSetup}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 mb-sm-2 mb-2">
          <div className="form-group row m-0 p-0">
            <label htmlFor="password2" className="col-12 col-form-label text-muted mb-0 pb-0 pl-0"><small>Check Password</small></label>
            <div className="col-12 p-0 m-0">
              <Field
                name="password2"
                type="password"
                {...fieldSetup}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row form-group">
        <div className="col-7 col-sm-6 text-center">
          <Field
            name="add"
            component={ButtonInline}
            saveDisabled={submitting}
            text="Add User"
          />
        </div>
        <div className="col-5 col-sm-6 text-center">
          <Field
            name="clear"
            component={ClearButton}
            clearDisabled={pristine || submitting}
            onClick={reset}
            text="Clear"
          />
        </div>
        {onSuccess &&
          <div className="col-12 pl-4 pt-4 m-o text-center pb-0">
            <span className="text-success small m-0 p-0">User  added successfully.</span>
          </div>
        }
      </div>
    </form>
  );
};

export default reduxForm({
  // a unique name for the form
  form: 'AddUser',
  validate,
  // warn,
})(AddUserForm);

AddUserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  onSuccess: PropTypes.bool.isRequired,
};
