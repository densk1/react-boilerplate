import React from 'react';

export const contactView273 = ( {label, data1, data2} ) => {
return(
	<div className="form-group row mb-0">
		<label className="col-sm-2 col-form-label text-muted pb-0"><small>{label ? label : '' }</small></label>{/* \u00A0 */}<div className="col-6 col-sm-5 mb-3 ">
			<input 
				type="text" 
				readOnly 
				disabled 
				className="form-control-plaintext " 
				value={''+data1 && data1}
			/>
		</div>
		<div className="col-1 col-sm-1 mb-0">
			<label 
				className=" col-form-label small text-muted pb-0"
			><small>Ext.</small></label>
		</div>
		<div className="col col-sm-4 mb-0">
			<input 
				type="text" 
				readOnly 
				disabled 
				className="form-control-plaintext " 
				value={''+data2 && data2}
			/>
		</div>
	</div>
)}
export default contactView273;