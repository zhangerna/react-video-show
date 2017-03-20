import { createStore, applyMiddleware, compose } from 'redux'; //引入redux createStore、中间件compose
import thunk from "redux-thunk"; // redux-thunk支持　dispath function ,并且可以异步调用它
import reducer from './reducer';

export default function finialCreateStore(preloadedState){

	const store = createStore(
		reducer(),
		preloadedState,
		compose(
			applyMiddleware(thunk),
			window.devToolsExtension ? window.devToolsExtension():f => f
		)
	);
	store.asyncReducers = {};
	return store;
} 