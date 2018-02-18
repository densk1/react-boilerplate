const displayContactCard = (isCard, isError) => {
	let card = {
		disabled: true,
		readOnly: true,
		className: "form-control custom-form-plaintext",

	}
	let form = { className: "form-control " }
	if (isError) form.className = "form-control is-invalid"
	
	return isCard ? card : form;
}
export default displayContactCard