import React, { Component } from 'react';

export const contactCardDetail = attrib => (
	<div className="form-group row">
	
		<label className="col-sm-2 col-form-label text-muted pb-0">Email</label>
	<div className="col-sm-5">
	<input 
		type="text" 
		readOnly 
		disabled 
		className="form-control-plaintext mb-4" 
		value={attrib.data}
	/>
	</div>
	<div className="col-sm-5">
		</div>
	</div>
)
export default contactCardDetail;