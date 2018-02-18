import React from 'react';

const firstLetterUppercase = (string) => {
    string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/*
USAGE:

label="Name"
names={['firstName', 'lastName']} 
types0='text'
types1='text'
placeholder={[ 'First Name', 'Second Name']}
component={FieldsInline}
*/
const renderFieldsInline = (fields) => (
    <div className="form-group row mb-0">
        <label 
            className="col-sm-2 col-form-label small text-muted pb-0"
        ><small>{ firstLetterUppercase(fields.label) }</small></label>
        <div className="col-sm-5 mb-sm-3 mb-4">
            <input 
                {...fields.firstName.input} 
                type={fields.types0 || "text" }
                placeholder={fields.placeholder[0]}
                className={'form-control '+ ((fields.firstName.meta.touched && fields.firstName.meta.error) && 'is-invalid') }
                autoComplete="name"
                />
        </div>
        <div className="col-sm-5 ">
            <input 
                {...fields.lastName.input} 
                type={fields.type1 || "text" }
                placeholder={fields.placeholder[1]}
                className="form-control " 
                />
                { fields.lastName.meta.touched && fields.lastName.meta.error && 
                    <span className="error small text-danger">
                        {fields.lastName.meta.error}
                    </span>
                }
        </div>
        { fields.firstName.meta.touched && fields.firstName.meta.error && 
        <div className="custom-error offset-sm-2 col-sm-10" >
            <span className="w-100 error small text-danger" >
                {fields.firstName.meta.error}
            </span>
        </div>
        }
    </div>
)

export default renderFieldsInline;

/*
style={{position: 'absolute', bottom: '-10px', lineHeight: 0}}
*/