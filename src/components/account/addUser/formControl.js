const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Please add a First Name.';
  } else if (values.firstName.length < 3) {
    errors.firstName = 'Must be 3 characters or greater.';
  } else if (values.firstName.length > 20) {
    errors.firstName = 'Must be 20 characters or greater.';
  }
  if (!values.secondName) {
    errors.secondName = 'Please add a Second Name.';
  } else if (values.secondName.length < 3) {
    errors.secondName = 'Must be 3 characters or greater.';
  } else if (values.secondName.length > 20) {
    errors.secondName = 'Must be 20 characters or greater.';
  }


  if (!values.email) {
    errors.email = 'Email address required.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Not an email Address.';
  }


  if (!values.password) {
    errors.password = 'Please add a password';
  } else if (!/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/.test(values.password)) {
    errors.password = 'Must be > 8 characters and include one number and one letter.';
  }

  if (!values.password2) {
    errors.password2 = 'Please confirm your password.';
  } else if (values.password !== values.password2) {
    errors.password2 = 'Passwords must match.';
  }


  return errors;
};

/*
export const warn = values => {
    const warnings = {}
    if (values.age < 19) {
        warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
}
*/

export default validate;
