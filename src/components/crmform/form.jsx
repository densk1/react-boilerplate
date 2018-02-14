import React from 'react';

import { Field, reduxForm } from 'redux-form'

import InlineForm1 from './templates/inlineform1.jsx';
import InlineForm2 from './templates/inlineform2.jsx';

const email = {
	name:"email",
	component:"input",
	type:"email",
	className:"form-control",
}
const generic = {
	component: "input",	
	className:"form-control",
}
const name = {
	first: {
		name: "firstname",
		type: "text",
		placeholder: "First Name",
		...generic
	},
	second: {
		name: "secondname",
		type: "text",
		placeholder: "Second Name",
		...generic
	}
}
const office = {
	name: "office",
	type:"tel",
	...generic
}
const mobile = {
	name: "mobile",
	type:"tel",
	...generic
}
const desk = {
	name: "desk",
	type:"tel",
	...generic
}

const date = {
	name: "date",
	type:"date",
	...generic
}

let ContactForm = props => {
	const { handleSubmit } = props
	return (
		<form onSubmit={handleSubmit} className="offset-sm-2 col-sm-8">
			<InlineForm2 name={ "Name"} 
				child={[
					<Field {...name.first} />,
					<Field {...name.second} />
				]} />
			<InlineForm1 name={ "Email"} child={<Field {...email} />} />
			<InlineForm1 name={ "Mobile"} child={<Field {...mobile} />} />
			<InlineForm1 name={ "Office"} child={<Field {...office} />} />
			<InlineForm1 name={ "Desk"} child={<Field {...desk} />} />
			<InlineForm1 name={ "Date"} child={<Field {...date} />} />
			<button className="btn btn-outline-success w-50" type="submit">Submit</button>
		</form>
	)
}




ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm