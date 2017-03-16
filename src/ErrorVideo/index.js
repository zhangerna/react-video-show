import React from 'react';
import SearchFilter from './SearchFilter';
import FilterContent from './FilterContent';
import $ from "jquery";

let ip= "http://192.168.31.240:8081";
let url =  ip + "/api/video?status=-1";

class Video extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			searchFilter:{},
			receiveData:{},
		}
		this.search = this.search.bind(this)
		this.changePage = this.changePage.bind(this);
	}
	componentWillMount(){
		var receiveData = {}
		var that = this;
		$.ajax({
			type:"get",
			url:url,
			async:false,
			success:function(data){
				receiveData = data;
				that.setState({
					receiveData: data
				});	
			}
		})

		this.setState({
			receiveData:receiveData
		})
	}
	search(data){
		this.setState({
			searchFilter: data
		})
		function join_url(data, url){
			let temp = url
			temp += "?status=-1"
			if (data["current_source"] && data["current_source"] != ""){
				temp += "&web_id=" + data["current_source"]
			}
			if (data["current_video"] && data["current_video"] != ""){
				temp += "&name=" + data["video"]
			}
			if (data["current_download_status"] && data["current_download_status"] != ""){
				temp += "&download_status=" + data["current_download_status"]
			}
			return temp
		}
		let href = join_url(data, url);
		let receiveData = null;
		var that = this;
		$.get(href, function(json, status){
			if (json){
				that.setState({
					receiveData: json
				})
			}
		})
	}
	changePage(data){
		function join_url(data, url){
			let temp = url;
			if (data["current_source"] && data["current_source"] != ""){
				temp += "&web_id=" + data["current_source"]
			}
			if (data["current_video"] && data["current_video"] != ""){
				temp += "&name=" + data["video"]
			}
			if (data["current_download_status"] && data["current_download_status"] != ""){
				temp += "&download_status=" + data["current_download_status"]
			}
			return temp
		}
		let href = join_url(this.state.searchFilter, url);
		var that = this;
		$.get(href, function(json, status){
			if (json){
				that.setState({
					receiveData: json
				})
			}
		})
	}
	render(){
		return (
			<div>
				<SearchFilter onSearch={this.search} />
				<FilterContent receiveContent={this.state.receiveData} />
			</div>
		);
	}
};

export default Video;