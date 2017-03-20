import * as types from "./types";

const initialState = {
	searchData:{},
	receiveData:{}
}

export default function search(state=initialState, action){
	switch (action.type){
		case types.INIT_DATA:
			return Object.assign({}, state, {
				receiveData: action.data
			})
		case types.SAVE_SEARCH_DATA:
			return Object.assign({}, state, {
				searchData: action.data,
				receiveData: action.receive_data
			})
		default:
			return state;
	}
}