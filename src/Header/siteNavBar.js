/**
 * Created by user on 2017/2/28.
 */
import React from 'react';
import  "../../css/siteNavBar.css";

class NavTag extends React.Component{

  render(){
      return (
           <a><span className={this.props.showClass ? "tag-other-show" : "tag-other"} id={this.props.currentIndex}
            onClick={this.props.onSelect} >{this.props.currentTag}</span></a>
      )
  };
};

class SiteNavBar extends React.Component{
    render(){
        return (
            <div className="nav">
                <span className="tag-1">爬虫视频分析</span>
                <NavTag currentIndex={1} currentTag={"电视剧"} showClass={this.props.index1_class} onSelect={this.props.onSelect} />
                <NavTag currentIndex={2} currentTag={"出错剧集"} showClass={this.props.index2_class} onSelect={this.props.onSelect} />
            </div>
        );
    }
};

export default SiteNavBar;