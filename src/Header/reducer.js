
import * as types from "./types";

const initialState = {
	currentIndex:'1',
};

export default function login(state=initialState, action){
	switch (action.type){
		case types.SAVE_CURRENT_INDEX:
			return Object.assign({}, state, {
				currentIndex: action.index,
			});
		case types.LOGOUT:
			return Object.assign({}, state, {});
		default:
			return state;
	}
}