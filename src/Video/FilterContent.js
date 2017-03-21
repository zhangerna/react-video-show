import React from 'react';
import { Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import "../../css/FilterContent.css";
import $ from "jquery";

class FilterContent extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			page_count: this.props.receiveContent ? this.props.receiveContent["page_count"] : 0,
			total_count: this.props.receiveContent ? this.props.receiveContent["total_count"] : 0,
			data: this.props.receiveContent ? this.props.receiveContent["episode"] :[],
			current_page: this.props.currentPage ? this.props.currentPage : 1,
			page_size: this.props.page_size ? this.props.page_size : 30
		}
	}
	componentWillReceiveProps(nextProps){
		if (nextProps){
			this.setState({
				data: nextProps.receiveContent ? nextProps.receiveContent["episode"] :[],
				page_count: nextProps.receiveContent ? nextProps.receiveContent["page_count"] : 0,
				total_count: nextProps.receiveContent ? nextProps.receiveContent["total_count"] : 0,
				current_page: this.props.currentPage ? this.props.currentPage : 1,
				page_size: this.props.pageSize ? this.props.pageSize : 30

			})
		}
	}
	render(){
		return (
			<div>
				<Table data={this.state.data} pageCount={this.state.page_count} totalCount={this.state.total_count} 
				currentPage={this.state.current_page} pageSize={this.props.page_size} changePage={this.props.changePage} />
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
		this.checkbox_choice = this.checkbox_choice.bind(this);
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
				for (var j in this.state.receive_data[i]["website"]){
					temp.push(this.state.receive_data[i]["website"][j]["source_episode_id"])
				}
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
	checkbox_choice(event){
		console.log(event.target.id);
		$("#" + event.target.id).attr("checked", "checked")
	}
	render(){
		return(
			<div className="font-size">
				<table className="table table-striped table-advance table-hover">
					<thead>
						<tr>
							<th><input type="checkbox" value="" onClick={this.onClick} />全选</th>
							<th>name</th>
							<th>总集数</th>
							<th>类型</th>
							<th width="20%">主演</th>
							<th>地区</th>
							<th>上架时间</th>
							<th>别名</th>
							<th>来源</th>
							<th>播放量</th>
							<th>下载状态</th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.receive_data ? this.state.receive_data.map((ele, index) => (
								Object.keys(ele["website"]).map((key) => (
									<tr>
										{ele["website"][key]["download_status"] >= 2 || this.state.download_id.indexOf(ele["website"][key]["source_episode_id"]) != -1  ? 
											<td><input type='checkbox' id={ele["website"][key]["source_episode_id"]} value="" checked={false} disabled/></td>
										:
											<td><input type='checkbox' id={ele["website"][key]["source_episode_id"]} onClick={this.checkbox_choice} value="" checked={this.state.all_select}/></td>
										}
										<td>{ele["name"]}</td>
										<td>{ele["video_num"]}</td>
										<td>{ele["classify"]}</td>
										<td>{ele["starring"]}</td>
										<td>{ele["area"]["name"]}</td>
										<td>{ele["year"]}</td>
										<td>{ele["alias"]}</td>
										<td>{key}</td>
										<td>{ele["website"][key]["vv"]}</td>
										<td>{ele["website"][key]["download_status"]}</td>
										{ele["website"][key]["download_status"] >= 2 || this.state.download_id.indexOf(ele["website"][key]["source_episode_id"]) != -1  ? 
											<td><Button type="button" bsStyle="success" bsSize="xsmall" onClick={() => this.choiceDownload(ele["website"][key]["source_episode_id"])} disabled>下载</Button></td>
										:
											<td><Button type="button" bsStyle="success" bsSize="xsmall" onClick={() => this.choiceDownload(ele["website"][key]["source_episode_id"])}>下载</Button></td>
										}
									</tr>
								))

							))
							:
							<tr>正在加载</tr>
						}
					</tbody>
				</table>
				<div id="react-paginate" className="right">
					<ReactPaginate
						previousLabel={"previous"}
						nextLabel={"next"}	
						breakLabel={<a href="">...</a>}					
						pageCount={this.props.totalCount}
						breakClassName={"break-me"}
						pageRangeDisplayed={5}
						initialPage={this.props.currentPage-1}
						onPageChange={this.props.changePage}
						marginPagesDisplayed={1}
						activeClassName={'active'}
						containerClassName={"pagination"}
						subContainerClassName={"pages pagination"}
					 />
				</div>
			</div>
		);
	}
};
