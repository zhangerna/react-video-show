import { combineReducers } from "redux"; //利用combineReducers合并reducers
import { routerReducer } from "react-router-redux"; //将roterReducer一起合并管理

import loginReducer from "./Login/reducer";
import NavReaducer from "./Header/reducer";
import VideoReducer from "./Video/reducer";
import ErrorReducer from "./ErrorVideo/reducer";

export const createReducer = (asyncReducers) => {

	return combineReducers({
		routing:routerReducer,
		login: loginReducer,
		nav: NavReaducer,
		video:VideoReducer,
		error:ErrorReducer,
		...asyncReducers
	})
}

export default createReducer;