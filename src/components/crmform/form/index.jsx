import React from 'react';
import { connect } from 'react-redux';


import { Field, Fields, reduxForm } from 'redux-form';
import { validate, warn } from './controls/formControl';
import {load as loadAccount} from './account'

import FieldInline from './templates/fieldInline';
import FieldsInline from './templates/fieldsInline';
import CompanyFieldsInline from './templates/companyInline';
import OfficeExtensionFieldsInline from './templates/phonesInline';
import ButtonsInline from './templates/buttonsInline';

// Load data into form



let ContactForm = props => {
	const { 
        handleSubmit, 
		load,
        pristine, 
        reset, 
        submitting ,
		card,

    } = props;
	return (
		<form 
			id="newContactForm"
            onSubmit={handleSubmit} 
            className="card card-body col-xs-12 offset-sm-1 col-sm-10 offset-md-1 col-md-10 "
            >
			<div>
        		<button type="button" onClick={() =>load(card) }>Load Account</button>
      		</div>
			<Fields 
                label="Name"
                names={['firstName', 'lastName']} 
                placeholder={[ 'First Name', 'Second Name']}
                component={FieldsInline}
                />
            <Field 
				label="Email"
                name="email" 
                component={FieldInline} 
                />
			<Fields 
                label="Company"
                names={['organisation', 'role']} 
                placeholder={[ 'Organisation', 'Job Title']}
                component={CompanyFieldsInline}
                />
			<hr />
			<Fields 
                label="Phone"
                names={['officePhone', 'extension', 'desk', 'mobile']} 
                placeholder={[ 'Office', 'Ext.', 'Desk', 'Mobile']}
                component={OfficeExtensionFieldsInline}
                />
			<hr />		
            <Field 
                label="Address"
                name="address1"     
                placeholder="No. & Street Name"
                component={FieldInline} 
                />
            <Field  

                name="address2"     
                placeholder="Address Line 2"
                component={FieldInline} />
            <Field 

                name="city"      
                placeholder="City"
                component={FieldInline} 
                />
            <Field 

                name="postcode"     
                placeholder="Postcode"
                component={FieldInline} 
                />
			<hr />
			<div className="text-muted text-center">
				<h2>&lt; Insert First Comment box &gt;</h2>
			</div>
			<hr />
            <Fields 
                names={['save', 'clear']}
                component={ButtonsInline} 
                saveDisabled={submitting} 
                clearDisabled={pristine || submitting}
                onClick={reset}
                />
		</form>
	)
}


ContactForm = reduxForm({
  // a unique name for the form
    form: 'newContact',
    validate,
    warn
})(ContactForm)

function mapStateToProps ({ contacts }) {
	let { card } = contacts;
	let initialValues = card ;
	//let { load } = contacts;
	let { newComment } = contacts.comments;
	return { card, newComment, initialValues };
}

// You have to connect() to any reducers that you wish to connect to yourself
ContactForm = connect(mapStateToProps, {load: loadAccount})(ContactForm)



export default ContactForm;