import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Video from "./Video/index";
import ErrorVideo from "./ErrorVideo/index";
import App from "./App";

const getRootRouter = [
	{
		path: '/',
		component: App,
		childRoutes:[
			{path:'video', component:Video},
			{path:'error_video', component:ErrorVideo}
		]
	}
];

ReactDOM.render(
	<Router history={ browserHistory } routes={getRootRouter} />, 
	document.getElementById('root')
	);