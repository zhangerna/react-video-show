/**
 * Created by user on 2017/2/28.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SiteNavBar from './siteNavBar';
import { browserHistory } from 'react-router';
import * as NavAction from "./action";

class navBar extends Component {
	constructor(props, context){
		super(props, context);

		this.state = {
			currentIndex:1,
            index1_class:true,
            index2_class:false
		}

		this.choiceSelect = this.choiceSelect.bind(this);
		this.logout = this.logout.bind(this);
	}

	componentWillMount(){
		if (window.location.pathname == "/index"){
			this.setState({
				currentIndex:1,
				index1_class:true,
				index2_class:false		
			})
		}else{
			this.setState({
				currentIndex:2,
				index1_class:false,
				index2_class:true
			})
		}
	}

	choiceSelect(event){
		var currentIndex = event.target.id;
		if(event.target.id == 1){
			
			this.setState({
				currentIndex:currentIndex,
				index1_class:true,
				index2_class:false
			});
			const action = NavAction.getCurrentIndex(currentIndex);
			this.props.dispatch(action);
			browserHistory.push(`/video`)
		}else{
			this.setState({
				currentIndex:currentIndex,
				index2_class:true,
				index1_class:false
			});
			const action = NavAction.getCurrentIndex(currentIndex);
			this.props.dispatch(action);
			browserHistory.push(`/error_video`)
		}
	}
	logout(){
		const action = NavAction.logout();
		this.props.dispatch(action);
		browserHistory.push("/")
	}
	
    render(){
        return (
          <SiteNavBar
          		onSelect={this.choiceSelect} 
          		index1_class={this.state.index1_class}
          		index2_class={this.state.index2_class}
          		logout={this.logout}  />
        );
    };
};

export default connect()(navBar);

