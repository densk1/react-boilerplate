import React from 'react';

/*


const firstLetterUppercase = (string) => {
    string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}
*/

// type="text" //text is default so set to use a custom field
// label={} 
// used to give the row a custom label 
// rather than copying the input name

const renderFieldInline = (field) => (
    <div className="form-group row mb-0">
        <label className="col col-sm-2 col-form-label text-muted pb-0 ">
			<small>
			 {field.label && field.label }
			</small>
        </label>
        <div className="col-12 col-sm-10 mb-sm-3 mb-3">
					<input 
						{...field.input} 
						type={field.type || "text" }
						placeholder={field.placeholder || "" }
						className={"form-control "+ ((field.meta.touched && field.meta.error) && 'is-invalid') }
					/>
						{ field.meta.touched && field.meta.error && 
						<span className="error small text-danger">
								{field.meta.error}
						</span>
						}
        </div>
    </div>
)

export default renderFieldInline;