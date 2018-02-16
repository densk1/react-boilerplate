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
    <div className="form-group row ">
        <label 
            className="col-sm-2 col-form-label small text-muted pb-0"
            >
            <small>{ firstLetterUppercase(fields.label) }</small>
        </label>
        <div className="col-sm-5 mb-sm-1 mb-4">
            <input 
                {...fields.organisation.input} 
                type={fields.types0 || "text" }
                placeholder={fields.placeholder[0]}
                className="form-control " 
            />
                {/* fields.firstName.meta.touched && fields.firstName.meta.error && 
                    <span className="error small text-danger">
                    {fields.firstName.meta.error}
                    </span>
                */}
        </div>
        <div className="col-sm-5 ">
            <input 
                {...fields.role.input} 
                type={fields.type1 || "text" }
                placeholder={fields.placeholder[1]}
                className="form-control  " 
            />
                { 
                fields.role.meta.touched && fields.role.meta.error && 
                    <span className="error small text-danger">
                        {fields.role.meta.error}
                    </span>
                }
        </div>
        { fields.organisation.meta.touched && fields.organisation.meta.error && 
        <div className="offset-sm-2 col-sm-10">
            <span className="w-100 error small text-danger">
                {fields.organisation.meta.error}
            </span>
        </div>
        }
    </div>
)

export default renderFieldsInline;