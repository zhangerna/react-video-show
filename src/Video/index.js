import React from 'react';
import SearchFilter from './SearchFilter';
import FilterContent from './FilterContent';
import $ from "jquery";
import { connect } from "react-redux";
import * as VideoContent from "./action";

let ip= "http://192.168.31.240:8081";
let page = 1;
let get_video = 0;
let page_size = 30;
let current_page = 1;
let url =  ip + "/search/episode/";

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
		var test = null;
		$.ajax({
			type:"get",
			url:url +page,
			data:{
				"get_video":get_video,
				"page_size":page_size
			},
			async:false,
			success:function(data){
				test = data;
				receiveData = data;
				that.setState({
					receiveData: data
				});	
			}
		})

		this.setState({
			receiveData:receiveData
		})
		const action = VideoContent.init_table(receiveData);
		this.props.dispatch(action);

	}
	search(data){
		this.setState({
			searchFilter: data
		})
		function join_url(data, url){
			let temp = url + page
			temp += "?get_video=" + get_video + "&page_size=" + page_size
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
				const action = VideoContent.saveSearchData(data, json);
				that.props.dispatch(action);
			}
		})

	}
	changePage(data){
		var current_page= data.selected + 1;
		function join_url(data, url){
			let temp = url + current_page;
			temp += "?get_video=" + get_video + "&page_size=" + page_size
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
	render(){
		return (
			<div>
				<SearchFilter onSearch={this.search} />
				<FilterContent receiveContent={this.state.receiveData} pageSize={page_size} currentPage={current_page} changePage={this.changePage} />
			</div>
		);
	}
};

export default connect()(Video);