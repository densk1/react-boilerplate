// formControl.jsx

export const validate = values => {
    const errors = {}
	
    if (!values.oldpassword) {
		errors.oldpassword = 'Input your current password.';
	} else if (!/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/.test(values.oldpassword)) {
		errors.oldpassword = 'Your password should be > 8 characters and include one number and one letter.'
	}
	if (!values.newpassword) {
		errors.newpassword = 'Add a new password.';
	} else if (!/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/.test(values.newpassword)) {
		errors.newpassword = 'Must be > 8 characters and include one number and one letter.'
	} else if (values.oldpassword === values.newpassword) {
		errors.newpassword = "Can't be the same as old password."
	}
	if (!values.newpasswordcheck) {
		errors.newpasswordcheck = 'Please confirm your password.';
	} else if (values.newpassword !== values.newpasswordcheck) {
		errors.newpasswordcheck = 'Passwords must match.'
	}
    return errors
}

/*
export const warn = values => {
    const warnings = {}
    if (values.age < 19) {
        warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
}
*/