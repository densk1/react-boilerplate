import React from 'react';



const firstLetterUppercase = (string) => {
    string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// type="text" //text is default so set to use a custom field
// label={} 
// used to give the row a custom label 
// rather than copying the input name

const renderFieldInline = (field) => (
    <div className="form-group row">
        <label className="col-sm-2 col-form-label text-muted pb-0">
			<small>
			 {field.label || firstLetterUppercase(field.input.name)}
			</small>
        </label>
        <div className="col-sm-10 ">
					<input 
						{...field.input} 
						type={field.type || "text" }
						placeholder={field.placeholder || "" }
						className="form-control form-control-success" 
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