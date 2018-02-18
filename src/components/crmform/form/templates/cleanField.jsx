import React from 'react';
import displayContactCard from './displayContactCard';

const cleanField = (field) => (
    <div>
		<input 
			{...field.input} 
			type={field.type || "text" }
			placeholder={field.showPlaceholder && (field.placeholder || "") }
			{...displayContactCard(
				field.isContactCard, 
				(field.meta.touched && field.meta.error)
			)}
		/>
			{ field.meta.touched && field.meta.error && 
			<span className="error small text-danger m-0 p-0">
					{field.meta.error}
			</span>
			}
	</div>
)
export default cleanField;