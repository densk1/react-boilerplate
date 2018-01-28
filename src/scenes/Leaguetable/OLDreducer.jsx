/*const getData = (teamIndex = 0, season = '') = {
	return fetch('http://do:3000/team/'+teamIndex+'/leaguetable/'+season)
		.then((response) => response.json())
		.then((responseJson) => {
			responseJson.result
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

export default reducer;*/