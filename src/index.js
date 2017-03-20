import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route } from 'react-router';
import { Provider } from 'react-redux'; //利用provider可以使我们的store能为下面的组件所用
import { syncHistoryWithStore } from "react-router-redux";//利用react-router-redux提供的syncHistoryWithStore我们可以结合store同步导航事件　

import ErrorVideo from "./ErrorVideo/index";
import App from "./App";
import Login from "./Login/index";
import Video from "./Video/index";

import finalCreateStore from './store';

const store = finalCreateStore()

const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
	<Provider store={store}>
		<Router history={ history }>
			<Route path="/" component={Login} />
			<Route path="/index" component={App}>
				<Route path="/error_video" component={ErrorVideo}/>
				<Route path="/video" component={Video} />
			</Route>
		</Router>
	</Provider>, 
	document.getElementById('root')
);