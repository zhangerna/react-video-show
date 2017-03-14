import React from 'react';
import { Button } from 'react-bootstrap';
import "../../css/FilterContent.css";

let page_size = 30;

class FilterContent extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			data: this.props.receiveContent ? this.props.receiveContent["videos"] :[],
		}
	}
	componentWillReceiveProps(nextProps){
		if (nextProps){
			this.setState({
				data: nextProps.receiveContent ? nextProps.receiveContent["videos"] :[],

			})
		}
	}
	render(){
		return (
			<div>
				<Table data={this.state.data} />
			</div>
		);
	}
};

export default FilterContent;


class Table extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			all_select: false,
			current_choice_id:[],
			receive_data: this.props.data,
			download_id:[]
		}
		this.onClick = this.onClick.bind(this);
		this.choiceDownload = this.choiceDownload.bind(this);
	}
	componentWillMount(){
		this.setState({
			receive_data:this.props.data
		})
	}
	componentWillReceiveProps(nextProps){
		if (nextProps){
			this.setState({
				receive_data:nextProps.data
			})
		}
	}
	onClick(){
		var temp = [];
		if (!this.state.all_select){
			for (var i=0; i < this.state.receive_data.length; i++){
				temp.push(this.state.receive_data[i]["source_video_id"])
			}
		}
		this.setState({
			all_select: !this.state.all_select,
			current_choice_id: temp
		})
	}
	choiceDownload(source_episode_id){
		var temp = [];
		temp.push(source_episode_id);
		this.setState({
			download_id: temp
		})
	}
	render(){
		return(
			<div className="font-size">
				<table className="table table-striped table-advance table-hover">
					<thead>
						<tr>
							<th><input type="checkbox" value="" onClick={this.onClick} />全选</th>
							<th>id</th>
							<th>name</th>
							<th>下载状态</th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.receive_data ? this.state.receive_data.map((ele, index) => (
									<tr key={index}>
										{ele["status"] >= 2 || this.state.download_id.indexOf(ele["source_video_id"]) != -1  ? 
											<td><input type='checkbox' value="" checked={this.state.all_select} disabled/></td>
										:
											<td><input type='checkbox' value="" checked={this.state.all_select}/></td>
										}
										<td>{ele["source_video_id"]}</td>
										<td>{ele["video_name"]}</td>
										<td>{ele["status"]}</td>
										{ele["status"] >= 2 || this.state.download_id.indexOf(ele["source_video_id"]) != -1  ? 
											<td><Button type="button" bsStyle="success" bsSize="xsmall" onClick={() => this.choiceDownload(ele["source_video_id"])} disabled>下载</Button></td>
										:
											<td><Button type="button" bsStyle="success" bsSize="xsmall" onClick={() => this.choiceDownload(ele["source_video_id"])}>下载</Button></td>
										}
									</tr>
							))
							:
							<h3>正在加载</h3>
						}
					</tbody>
				</table>
			</div>
		);
	}
};
