import * as types from "./types";

const saveCurrentIndex = (index) => ({
	type: types.SAVE_CURRENT_INDEX,
	index
});

export const getCurrentIndex = (index) => (dispatch => {
	const action = saveCurrentIndex(index);
	dispatch(action);
});

export const logout = () => ({
	type: types.LOGOUT
});