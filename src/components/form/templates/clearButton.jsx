import React from 'react';

const clearButton = (props) => (
	<div>
		<button 
			className={"btn  w-100 "+(props.clearDisabled? "btn-outline-secondary" : "btn-outline-danger" )} 
			type="submit" 
			disabled={props.clearDisabled}
			onClick={props.onClick}
		>
			{props.text}
		</button>
	</div>
)

export default clearButton;


/*
				<Field 
					name={'clear'}
					component={clearButton} 
					clearDisabled={pristine || submitting}
					onClick={reset}
					/>

*/