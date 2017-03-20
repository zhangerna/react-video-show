import * as types from "./types";

export const init_error_table = (data) =>({
	type:types.INIT_DATA,
	data
});

export const searchData = (search, receive) => ({
	type: types.SAVE_DATA,
	search,
	receive
});
