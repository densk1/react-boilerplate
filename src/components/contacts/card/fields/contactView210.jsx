import React from 'react';

export const contactView210 = ( {label, data1 } ) => {
return(
	<div className="form-group row mb-0">
		<label className="col-sm-2 col-form-label text-muted pb-0"><small>
			{label ? label :""}</small></label> {/* \u00A0 */}
		<div className="col-12 col-sm-10 mb-3">
			<input 
				type="text" 
				readOnly 
				disabled 
				className="form-control-plaintext "
				value={''+data1 && data1}
			/>
		</div>
	</div>
)}
export default contactView210;