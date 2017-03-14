/**
 * Created by user on 2017/2/28.
 */
import React, { Component } from 'react';
import SiteNavBar from './siteNavBar';
import { browserHistory } from 'react-router'

class navBar extends Component {
	constructor(props, context){
		super(props, context);

		this.state = {
			currentIndex:1,
            index1_class:true,
            index2_class:false
		}

		this.choiceSelect = this.choiceSelect.bind(this);
	}

	componentWillMount(){
		console.log(window.location.pathname)
		if (window.location.pathname == "/video"){
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
			browserHistory.push(`/video`)
		}else{
			this.setState({
				currentIndex:currentIndex,
				index2_class:true,
				index1_class:false
			});
			browserHistory.push(`/error_video`)
		}
	}
	
    render(){
        return (
          <SiteNavBar
          		onSelect={this.choiceSelect} 
          		index1_class={this.state.index1_class}
          		index2_class={this.state.index2_class}  />
        );
    };
};

export default navBar;

