// formControl.jsx

export const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Please add a First Name';
    } else if (values.firstName.length < 3) {
        errors.username = 'Must be 3 characters or greater';
    } else if (values.firstName.length > 20) {
        errors.username = 'Must be 20 characters or greater';
    }
    if (!values.email) {
        errors.email = 'Email address required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Not an email Address.'
    }
    
    
    if (!values.age) {
        errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
        errors.age = 'Sorry, you must be at least 18 years old'
    }
    return errors
}


export const warn = values => {
    const warnings = {}
    if (values.age < 19) {
        warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
}