const displayContactCard = (isCard, isError, isSpecialError) => {
	let card = {
		disabled: true,
		readOnly: true,
		className: "form-control custom-form-plaintext",

	}
	let form = { className: "form-control " }
    form = isSpecialError ? { className: "form-control is-invalid" } : form;
	if (isError) form.className = "form-control is-invalid"
	
	return isCard ? card : form;
}
export default displayContactCard