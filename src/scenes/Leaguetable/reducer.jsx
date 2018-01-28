const getData = () = {
	return fetch('http://do:3000/team/0/leaguetable/')
		.then((response) => response.json())
		.then((responseJson) => {

			this.setState({tableData:responseJson.result })

		})
		.catch((error) => {
		  console.error(error);
		});
}

const reducer = ( state = [], action, data ) => {
	switch (action.type) {
		case PREVIOUS_SEASON:
			return getData( data.teamIndex, data.season = null )
	}
}

export default reducer;