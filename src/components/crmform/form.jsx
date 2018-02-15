import React from 'react';

import { Field, Fields, reduxForm } from 'redux-form';
import { validate, warn } from './templates/formControl';

import FieldInline from './templates/fieldInline.jsx';
import FieldsInline from './templates/fieldsInline.jsx';
import CompanyFieldsInline from './templates/companyFieldsInline.jsx';
import OfficeExtensionFieldsInline from './templates/officeExtensionFieldsInline.jsx';

let ContactForm = props => {
	const { 
        handleSubmit, 
        pristine, 
        reset, 
        submitting 
    } = props;
	return (
		<form 
		  onSubmit={handleSubmit} 
		  className="card card-body col-xs-12 offset-sm-1 col-sm-10 offset-md-1 col-md-10">
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
                placeholder={[ 'Company Name', 'Job Title']}
                component={CompanyFieldsInline}
				value="hello"
				
            />
			<hr />
			<Fields 
                label="Phone"
                names={['officePhone', 'extension', 'desk', 'mobile']} 
                type0='tel'
                type1='tel'
                type2='tel'
                type3='tel'
                placeholder={[ 'Office', 'Ext', 'Desk', 'Mobile']}
                component={OfficeExtensionFieldsInline}
            />
			<hr />			
            <Field label="Address" name="address1" placeholder="No. & Street Name" component={FieldInline} />
            <Field label="&nbsp;" name="address2" placeholder="Address Line 2" component={FieldInline} />
            <Field label="&nbsp;" name="city" placeholder="City" component={FieldInline} />
            <Field label="&nbsp;" name="postcode" placeholder="Postcode" component={FieldInline} />
			<hr />
			<div className="text-muted text-center">
				<h2>&lt; Insert First Comment box &gt;</h2>
			</div>
			<hr />	
            
            <div className="form-group row">
                <div className="col-7 text-center mt-4">
                    <button className="btn btn-success w-100 " type="submit" disabled={submitting}>
                        Save
                    </button>
                </div>
                <div className="col-5 text-center mt-4">
                    <button className="btn btn-outline-danger w-100 " type="submit" disabled={pristine || submitting} onClick={reset}>
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