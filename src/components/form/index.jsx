import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Field, Fields, reduxForm } from 'redux-form';
import { validate, warn } from './controls/formControl';

/* *
* I should be importing actions here, but instead importing them into
* */

import ButtonsInline from './templates/buttonsInline';
import CleanField from './templates/cleanField';

// HTML classes
const formClass = 'card card-body col-xs-12 offset-sm-1 col-sm-10 offset-md-1 col-md-10 mb-3';
const colClass255 = 'col-12 col-sm-5 mb-sm-2 mb-2';
const colClass210 = 'col-12 col-sm-10 mb-sm-2 mb-2';
const labelClassRegular = 'col col-sm-2 col-form-label text-muted pb-0 mb-0';
const formGroupRow = 'form-group row mb-0 pb-0';
// const formGroupRowSpecial ="form-group row mb-0 pb-0";
// const labelClassSpecial="col-12 col-sm-3 col-form-label text-muted pb-0 mb-0";

class ContactForm extends PureComponent {
  render() {
    const {
      handleSubmit,
      pristine,
      reset,
      submitting,
      isContactCard,
      showPlaceholder,
      editable,
      buttons,
    } = this.props;
    const fieldSetup = {
      component: CleanField,
      isContactCard,
      showPlaceholder,
    };
    return (
      <form
        id="newContactForm"
        onSubmit={handleSubmit}
        className={formClass}
      >
        <div className={formGroupRow}>
          <label htmlFor="firstName" className={labelClassRegular}><small>Name</small></label>
          <div className={colClass255}>
            <Field
              name="firstName"
              placeholder="First Name"
              {...fieldSetup}
            />
          </div>
          <div className={colClass255}>
            <Field
              name="secondName"
              placeholder="Second Name"
              {...fieldSetup}
            />
          </div>
        </div>
        <div className={formGroupRow}>
          <label htmlFor="email" className={labelClassRegular}><small>Email</small></label>
          <div className={colClass210}>
            <Field
              name="email"
              {...fieldSetup}
            />
          </div>
        </div>
        <div className={formGroupRow}>
          <label htmlFor="organisation" className={labelClassRegular}><small>Company</small></label>
          <div className={colClass255}>
            <Field
              name="organisation"
              placeholder="Organisation"
              {...fieldSetup}
            />
          </div>
          <div className={colClass255}>
            <Field
              name="role"
              placeholder="Job Title"
              {...fieldSetup}
            />
          </div>
        </div>
        <hr />
        <div className={formGroupRow}>
          <label htmlFor="office" className={labelClassRegular}><small>Phone</small></label>
          <div className={colClass255}>
            <div className="row form-group m-0 p-0">
              <label htmlFor="office" className="col-12 col-form-label text-muted mb-0 pb-0"><small>Office</small></label>
              <div className="col-12 p-0 m-0">
                <Field
                  name="office"
                  // placeholder="Office"
                  {...fieldSetup}
                />
              </div>
            </div>
          </div>
          <div className={colClass255}>
            <div className="row form-group m-0 p-0">
              <label htmlFor="extension" className="col-12 col-form-label text-muted pb-0 mb-0"><small>Ext.</small></label>
              <div className="col-12 p-0 m-0">
                <Field
                  name="extension"
                  // placeholder="Ext"
                  {...fieldSetup}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={formGroupRow}>
          <label htmlFor="desk" className={labelClassRegular}></label>
          <div className={colClass255} >
            <div className="row form-group m-0 p-0">
              <label htmlFor="desk" className="col-12 col-form-label text-muted mb-0 pb-0"><small>Desk</small></label>
              <div className="col-12 p-0 m-0">
                <Field
                  name="desk"
                  // placeholder="Office"
                  {...fieldSetup}
                />
              </div>
            </div>
          </div>

          <div className={colClass255} >
            <div className="row form-group m-0 p-0">
              <label htmlFor="mobile" className="col-12 col-form-label text-muted pb-0 mb-0"><small>Mobile</small></label>
              <div className="col-12 p-0 m-0">
                <Field
                  name="mobile"
                  // placeholder="Ext"
                  {...fieldSetup}
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        {(editable && isContactCard && !this.props.initialValues.address1) ? '' :
        <div className={formGroupRow}>
          <label htmlFor="address1" className={labelClassRegular}><small>Address</small></label>
          <div className={colClass210}>
            <Field
              name="address1"
              placeholder="No. & Street Name"
              {...fieldSetup}
            />
          </div>
        </div>
        }
        {(editable && isContactCard && !this.props.initialValues.address2)  ? '' :
        <div className={formGroupRow}>
          <label htmlFor="address2" className={labelClassRegular}></label>
          <div className={colClass210}>
            <Field
              name="address2"
              placeholder="Address Line 2"
              {...fieldSetup}
            />
          </div>
        </div>
        }
        {(editable && isContactCard && !this.props.initialValues.city )  ? '' :
        <div className={formGroupRow}>
          <label htmlFor="city" className={labelClassRegular}><small></small></label>
          <div className={colClass210}>
            <Field
              name="city"
              placeholder="City"
              {...fieldSetup}
            />
          </div>
        </div>
        }
        {(editable && isContactCard && !this.props.initialValues.postcode )  ? '' :
        <div className={formGroupRow}>
          <label htmlFor="postcode" className={labelClassRegular}></label>
          <div className={colClass210}>
            <Field
              name="postcode"
              placeholder="Postcode"
              {...fieldSetup}
            />
          </div>
        </div>
        }
        {(editable && isContactCard && !this.props.initialValues.country )  ? '' :
        <div className={formGroupRow}>
          <label htmlFor="country" className={labelClassRegular}><small></small></label>
          <div className={colClass210}>
            <Field
              name="country"
              placeholder="Country"
              {...fieldSetup}
            />
          </div>
        </div>
        }


        {/*
        <hr />
        <div className="text-muted text-center">
        <h2>&lt; Insert First Comment box &gt;</h2>
        </div>
        <hr />
        */}


        {editable &&
          <div />
        }
        {isContactCard /* OR EDIT BUTTON */ ?
          <div />
            :

          <Fields
            names={['save', 'clear']}
            component={ButtonsInline}
            saveDisabled={submitting}
            clearDisabled={pristine || submitting}
            onClick={reset}
          />
        }
        { buttons &&
          <div className={formGroupRow}>
            <div className="col-12 mr-0 text-right">
              <p className="card-text">
                <small className="text-muted">
                  <a
                    href="/edit"
                    className="text-success "
                    onClick={(e) => {
                      e.preventDefault();
                      buttons[0]();
                    }}
                  >
                    edit
                  </a>
                  <a
                    href="/delete"
                    className="text-danger pl-4"
                    onClick={(e) => {
                      e.preventDefault();
                      buttons[1]();
                    }}
                  >delete
                  </a>
                </small>
              </p>
            </div>
          </div>
        }
        {/* <div className={formGroupRow}>
        <div className="col-6">
        {buttons && buttons[0]}
        </div>
        <div className="col-6">
        {(editable && !isContactCard) ? buttons[1] : ''}
        </div>
        </div>
        */}
      </form>
    );
  }
}
function mapStateToProps({ contacts }) {
  const initialValues = contacts.card || null;
  const { cardEdit } = contacts.card || false;

  return { initialValues, cardEdit };
}


export default connect(mapStateToProps, null)(reduxForm({
  form: 'newContact',
  validate,
  warn,
})(ContactForm));
