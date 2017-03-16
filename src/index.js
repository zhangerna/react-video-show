import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route } from 'react-router';
import ErrorVideo from "./ErrorVideo/index";
import App from "./App";
import Login from "./login";
import Video from "./Video/index";

// const getRootRouter = [
// 	{
// 		path: '/',
// 		component: App,
// 		childRoutes:[
// 			{path:'video', component:Video},
// 			{path:'error_video', component:ErrorVideo}
// 		]
// 	}
// ];

// const getRootRouter = <Route path="/" component={Login}>
// 						<Route path="index" component={App}/>
// 						<Route path="error_video" component={ErrorVideo}/>
// 					</Route>


ReactDOM.render(
	<Router history={ browserHistory }>
		<Route path="/" component={Login} />
		<Route path="/index" component={App}>
			<Route path="/error_video" component={ErrorVideo}/>
			<Route path="/video" component={Video} />
		</Route>
	</Router>, 
	document.getElementById('root')
);