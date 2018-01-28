import {
	DO_LOGIN,
	UPDATE_TABLE,
	PREVIOUS_SEASON,
} from './types';

export const doLogin ( email, password ) => {
	return { type: DO_LOGIN, data: someLoginFunctionName }
}

export const previousSeason ( teamIndex, seasonID  ) => {
	return { type: PREVIOUS_SEASON, data: someTableWithSeasonFetchFunction }
}