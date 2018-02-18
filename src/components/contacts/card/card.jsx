import React from 'react';

export const contactView255 = ( d ) => {
console.log(d);
return(
	<div className="form-group row">
		<label className="col-sm-2 col-form-label text-muted pb-0"><small>
			{d.label ? d.label : '\u00A0' }</small></label>
		<div className="col-sm-5 mb-sm-1 mb-4">
			<input 
				type="text" 
				readOnly 
				disabled 
				className="form-control-plaintext mb-4" 
				value={d.name}
			/>
		</div>
		<div className="col-sm-5 ">
			<input 
				type="text" 
				readOnly 
				disabled 
				className="form-control-plaintext mb-4" 
				value={d.nameSecond}
			/>
		</div>
	</div>
)}
export default contactView255;