import * as types from "./types";

export const init_table = (receive_data) => ({
	type: types.INIT_DATA,
	receive_data
});

export const saveSearchData = (data, receive_data) => ({
	type: types.SAVE_SEARCH_DATA,
	data,
	receive_data
});