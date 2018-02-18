import React from 'react';

const extraClassTrue = (extraClass) => {
	return extraClass ? extraClass+" " : "";
}
export const contactView255 = ( {label, data1, data2, extraClass} ) => {
return(
	<div className="form-group row mb-0">
		<label className="col-sm-2 col-form-label small text-muted pb-0" ><small>
			{label ? label : ""}</small></label>{/* '\u00A0' */}
		<div className={ extraClassTrue(extraClass)+"col-sm-5 mb-sm-3  "+(!extraClass && " mb-4")}>
			<input 
				type="text" 
				readOnly 
				disabled 
				className="form-control-plaintext" 
				value={data1}
			/>
		</div>
		<div className={ extraClassTrue(extraClass)+"col-sm-5 "}>
			<input 
				type="text" 
				readOnly 
				disabled 
				className="form-control-plaintext" 
				value={''+data2 && data2}
			/>
		</div>
	</div>
)}
export default contactView255;