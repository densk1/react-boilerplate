import React from 'react';

import { Field, Fields, reduxForm } from 'redux-form';
import { validate, warn } from './templates/formControl';

import FieldInline from './templates/fieldInline.jsx';
import FieldsInline from './templates/fieldsInline.jsx';
import CompanyFieldsInline from './templates/companyFieldsInline.jsx';

let ContactForm = props => {

	const { 
        handleSubmit, 
        pristine, 
        reset, 
        submitting 
    } = props;
	return (
		<form onSubmit={handleSubmit} className="offset-sm-1 col-sm-10">
            <Fields 
                label="Name"
                names={['firstName', 'lastName']} 
                types0='text'
                types1='text'
                placeholder={[ 'First Name', 'Second Name']}
                component={FieldsInline}
            />
            <Field name="email" component={FieldInline} />

			<Fields 
                label="Company"
                names={['company', 'role']} 
                types0='text'
                types1='text'
                placeholder={[ 'Company Name', 'Current Role']}
                component={CompanyFieldsInline}
            />
            <Field name="mobile" type="tel" component={FieldInline} />
            <Field name="office" type="tel" component={FieldInline} />
            <Field name="desk" type="tel" component={FieldInline} />
            <Field name="date" type="date" component={FieldInline} />

            
            <div className="form-group row">
                <div className="col-sm-8 text-center mt-4">
                    <button className="btn btn-sm btn-success w-100 " type="submit" disabled={submitting}>
                        Save
                    </button>
                </div>
                <div className="col-sm-4 text-center mt-4">
                    <button className="btn btn-sm btn-warning w-100 " type="submit" disabled={pristine || submitting} onClick={reset}>
                        Clear
                    </button>
                </div>
            </div>
		</form>
	)
}




ContactForm = reduxForm({
  // a unique name for the form
    form: 'newContact',
    validate,
    warn
})(ContactForm)

export default ContactForm