import React, { propTypes } from 'react';
import ReactDOM from 'react-dom';
import { Input, FormControl, Button } from 'react-bootstrap';
import "../../css/searchFilter.css";


class SourceFilter extends React.Component {
	render(){
		return (
		<div className="Filter-martin">
			<span>来源</span>
			<ul className="content-martin">
				{
					(this.props.source_filter).map((ele, index) => (
						this.props.current_source == index ?
							<li className="red-inline" key={index} value={index} onClick={this.props.getCurrentSource}>{ele}</li>
						:
							<li className="inline" key={index} value={index} onClick={this.props.getCurrentSource}>{ele}</li>
					))
				}
			</ul>
		</div>
	);}
};


class InputName extends React.Component {
	render(){
		return (
			<div className="Filter-martin">
				<span className="name-martin">影片名</span>
				<input type="text" ref="video_name" onChange={this.props.videoChange} />
				<Button type="button" bsStyle="success" bsSize="small"  onClick={this.props.searchClick} className="search-button">搜索</Button>
			</div>
		) 
	}
}

class SearchFilter extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			download_status: ["全部", "下载失败", "未触发下载", "下载中", "下载完成"],
			source_filter:["全部", "sohu", "letv", "qq"],
			current_download_status:0,
			current_source:0,
			current_video:""
		}
		this.onClick = this.onClick.bind(this);
		this.getCurrentSource = this.getCurrentSource.bind(this);
		this.getDownloadFilter = this.getDownloadFilter.bind(this);
		this.videoChange = this.videoChange.bind(this);
	}
	getDownloadFilter(event){
		if (event.target.value) {
				this.setState({
				current_download_status: event.target.value
			})
		}
	}
	getCurrentSource(event){
		if (event.target.value){
			this.setState({
				current_source:event.target.value
			})
		}
	}
	videoChange(event){
		console.log(event.target.value)
		this.setState({
			current_video: event.target.value
		})
	}

	onClick(){
		let data = {
			"current_source": this.state.current_source,
			"current_video" : this.state.current_video,
			"current_download_status": this.state.current_download_status
		}
		this.props.onSearch(data)

	}

	render(){
		return (
			<div>
				<div className="search-border">
					<span className="searchFilter-title">搜索框</span>
				</div>
				<div>
					<SourceFilter current_source={this.state.current_source} source_filter={this.state.source_filter} getCurrentSource={this.getCurrentSource} />
					<InputName searchClick={this.onClick} videoChange={this.videoChange} />
				</div>
			</div>
		);
	}
};

export default SearchFilter;