import React from 'react';

/*
	<Field 
		name={'add'}
		component={ButtonInline} 
		saveDisabled={submitting}
		text={"Add User"}
		/>
*/

const buttonsInline = (props) => (
	<div>
		<button 
			className="btn btn-success w-100" 
			type="submit" 
			disabled={props.saveDisabled}

		>
			{props.text}
		</button>
		
	</div>

)

export default buttonsInline;

