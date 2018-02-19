import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Field, Fields, reduxForm } from 'redux-form';
import { validate, warn } from './controls/formControl';


/**
*	I should be importing actions here, but instead importing them into
**/

import ButtonsInline from './templates/buttonsInline';
import CleanField from './templates/cleanField';

// HTML classes
const formClass="card card-body col-xs-12 offset-sm-1 col-sm-10 offset-md-1 col-md-10 ";
const colClass255 = "col-12 col-sm-5 mb-sm-2 mb-2";
const colClass210 = "col-12 col-sm-10 mb-sm-2 mb-2";
const labelClassRegular = "col col-sm-2 col-form-label text-muted pb-0 mb-0";
const formGroupRow ="form-group row mb-0 pb-0";
const formGroupRowSpecial ="form-group row mb-0 pb-0";
const labelClassSpecial="col-12 col-sm-3 col-form-label text-muted pb-0 mb-0";

class ContactForm extends Component {

	render () {
        const { 
            handleSubmit, 
            pristine, 
            reset, 
            submitting ,
            isContactCard,
            showPlaceholder,
            editable,
        } = this.props;

        const fieldSetup = {
            component: CleanField,
            isContactCard,
            showPlaceholder
        }
		return (
			<form 
				id="newContactForm"
				onSubmit={handleSubmit} 
				className={formClass}
				>
				<div className={formGroupRow}>
					<label className={labelClassRegular}><small>Name</small></label>
					<div className={colClass255}>
						<Field
							name="firstName"
							placeholder={"First Name"}
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
					<label className={labelClassRegular}><small>Email</small></label>
					<div className={colClass210}>
						<Field
							name="email"
							{...fieldSetup}
							/>					
					</div>
				</div>
				<div className={formGroupRow}>
					<label className={labelClassRegular}><small>Company</small></label>
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
					<div className="col-8 col-form-label col-sm-8">
						<div className={formGroupRowSpecial}>
							<label className={labelClassSpecial}><small>Phone</small></label>
							<div className="col-12 col-sm-9 ">
								<Field
									name="office"
									placeholder="Office"
									{...fieldSetup}
									/>					
							</div>
						</div>
					</div>
					<div className="col-4 col-form-label col-sm-4">
						<div className={formGroupRowSpecial}>
							<label className={labelClassSpecial}><small>Ext</small></label>
							<div className="col-12 col-sm-9">
								<Field
									name="extension"
									{...fieldSetup}
									/>					
							</div>
						</div>
					</div>
				</div>
				<div className={formGroupRow}>
					<label className={labelClassRegular}><small></small></label>
					{ (editable && isContactCard && !this.props.initialValues.desk )  ? "" :
                    <div className={colClass255}>
						<Field
							name="desk"
							placeholder="Desk"
							{...fieldSetup}
							/>					
					</div>
                    }
                    { (editable && isContactCard && !this.props.initialValues.mobile )  ? "" :
					<div className={colClass255}>
						<Field
							name="mobile"
							placeholder="Mobile"
							{...fieldSetup}
							/>					
					</div>
                    }
				</div>	
				<hr />
                {   
                    (editable && isContactCard && !this.props.initialValues.address1 )  ? "" : 
				<div className={formGroupRow}>
					<label className={labelClassRegular}><small>Address</small></label>
					<div className={colClass210}>
						<Field
							name="address1"     
							placeholder="No. & Street Name"
							{...fieldSetup}
							/>					
					</div>
				</div>
                }
				{  (editable && isContactCard && !this.props.initialValues.address2 )  ? "" :
                <div className={formGroupRow}>
					<label className={labelClassRegular}><small></small></label>
					<div className={colClass210}>
						<Field
							name="address2"     
							placeholder="Address Line 2"
							{...fieldSetup}
							/>					
					</div>
				</div>
                }
                { (editable && isContactCard && !this.props.initialValues.city )  ? "" :
				<div className={formGroupRow}>
					<label className={labelClassRegular}><small></small></label>
					<div className={colClass210}>
						<Field
							name="city"     
							placeholder="City"
							{...fieldSetup}
							/>					
					</div>
				</div>
                }
                { (editable && isContactCard && !this.props.initialValues.postcode )  ? "" :
				<div className={formGroupRow}>
					<label className={labelClassRegular}><small></small></label>
					<div className={colClass210}>
						<Field
							name="postcode"     
							placeholder="Postcode"
							{...fieldSetup}
							/>					
					</div>
				</div>
                }
                { (editable && isContactCard && !this.props.initialValues.country )  ? "" :
                <div className={formGroupRow}>
					<label className={labelClassRegular}><small></small></label>
					<div className={colClass210}>
						<Field
							name="country"     
							placeholder="Country"
							{...fieldSetup}
							/>					
					</div>
				</div>
                }

				{/*<hr />
				<div className="text-muted text-center">
					<h2>&lt; Insert First Comment box &gt;</h2>
				</div>
				<hr />*/}

                { 
					editable &&
						<div></div>
				}
				{ isContactCard /* OR EDIT BUTTON */ ? 			<div>

				</div> :
                
				<Fields 
					names={['save', 'clear']}
					component={ButtonsInline} 
					saveDisabled={submitting} 
					clearDisabled={pristine || submitting}
					onClick={reset}
					/>
				}


			</form>
		)
	}
}


ContactForm = reduxForm({
  // a unique name for the form
    form: 'newContact',
    validate,
    warn,
	

})(ContactForm)

function mapStateToProps ({ contacts }) {
	let initialValues = contacts.card || null ;
	let { cardEdit }  = contacts.card || false;
	return { initialValues, cardEdit };
}

// You have to connect() to any reducers that you wish to connect to yourself
ContactForm = connect(
	mapStateToProps,
	null
)(ContactForm);



export default ContactForm;