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
        >
            <small>{ firstLetterUppercase(fields.label) }</small>
        </label>
        <div className="col-6 col-sm-5 mb-sm-3 mb-3 ">
            <input 
                {...fields.officePhone.input} 
                type={fields.type0 || "text" }
                placeholder={fields.placeholder[0]}
                className="form-control " 
            />
                {/* fields.firstName.meta.touched && fields.firstName.meta.error && 
                    <span className="error small text-danger">
                    {fields.firstName.meta.error}
                    </span>
                */}
        </div>
		<div className="col-1 col-sm-1">
			<label 
				className=" col-form-label small text-muted pb-0"
			><small>{ firstLetterUppercase(fields.placeholder[1]) }</small></label>
		</div>
        <div className="col col-sm-4">
            <input 
                {...fields.extension.input} 
                type={fields.type1 || "text" }
                placeholder={fields.placeholder[1]}
                className="form-control" 
            />
                { 
                fields.extension.meta.touched && fields.extension.meta.error && 
                    <span className="error small text-danger">
                        {fields.extension.meta.error}
                    </span>
                }
        </div>
        <label 
            className="col-sm-2 col-form-label small text-muted pb-0"
        >
        </label>
        <div className="col-6 col-sm-5 mb-sm-3">
            <input 
                {...fields.desk.input} 
                type={fields.type2 || "text" }
                placeholder={fields.placeholder[2]}
                className="form-control " 
            />
                {/* fields.desk.meta.touched && fields.desk.meta.error && 
                    <span className="error small text-danger">
                    {fields.desk.meta.error}
                    </span>
                */}
        </div>
        <div className="col-6 col-sm-5">
            <input 
                {...fields.mobile.input} 
                type={fields.type3 || "text" }
                placeholder={fields.placeholder[3]}
                className="form-control  " 
            />
                { 
                fields.mobile.meta.touched && fields.mobile.meta.error && 
                    <span className="error small text-danger">
                        {fields.extension.meta.error}
                    </span>
                }
        </div>

		
		
    </div>
)

export default renderFieldsInline;