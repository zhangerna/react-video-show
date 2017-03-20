/**
 * Created by user on 2017/2/28.
 */
import React from 'react';
import { connect } from "react-redux";
import  "../../css/siteNavBar.css";
import FontAwesome from "react-fontawesome";

class NavTag extends React.Component{

  render(){
      return (
           <a><span className={this.props.showClass ? "tag-other-show" : "tag-other"} id={this.props.currentIndex}
            onClick={this.props.onSelect} >{this.props.currentTag}</span></a>
      )
  };
};

class Break extends React.Component {

  render(){
    return (
        <div className="white">
          <FontAwesome name="user" className="user" size="2x" style={{textShadow: '0 1px 0 #fffff'}} />
          <span>&nbsp;{this.props.username}</span>
          <span style={{ marginLeft: '6em'}} className="break" onClick={this.props.logout} >退出</span>
        </div>
      )
  };
}

class SiteNavBar extends React.Component{
    render(){
        return (
            <div className="nav">
                <span className="tag-1">爬虫视频分析</span>
                <NavTag currentIndex={1} currentTag={"电视剧"} showClass={this.props.index1_class} onSelect={this.props.onSelect} />
                <NavTag currentIndex={2} currentTag={"出错剧集"} showClass={this.props.index2_class} onSelect={this.props.onSelect} />
                <Break username={this.props.username } logout={this.props.logout} />
            </div>
        );
    }
};

function mapStateToProps(state){
  console.log("state ....tree.")
  console.log(state["login"].username)
  return {
    username :state["login"].username
  }
}

export default connect(mapStateToProps)(SiteNavBar);