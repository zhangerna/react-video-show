import * as types from "./types";

const saveLoginData = (username, password) => ({
	type: types.SAVE_LOGIN_DATA,
	username,
	password

});

export const loginCheck = (username, password) => (dispatch => {
	const action = saveLoginData(username, password);
	dispatch(action);
})