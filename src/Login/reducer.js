
import * as types from "./types";

const initialState = {
	username:'',
	password:''
};

export default function login(state=initialState, action){
	switch (action.type){
		case types.SAVE_LOGIN_DATA:
			return Object.assign({}, state, {
				username: action.username,
				password: action.password
			});
		default:
			return state;
	}
}

