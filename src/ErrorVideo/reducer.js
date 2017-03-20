import * as types from "./types";

const initialState = {
	search: {},
	receive:{},
};

export default function error_video(state=initialState, action){
	switch (action.type){
		case types.INIT_DATA:
			return Object.assign({}, state, {
				receive: action.data
			});
		case types.SAVE_DATA:
			return Object.assign({}, state, {
				search: action.search,
				receive: action.receive
			})
		default:
			return state;
	}
}
