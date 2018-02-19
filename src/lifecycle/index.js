import React, { Component } from 'react';
import LifecycleBody from './lifecycle-body';
import LifecycleHeader from './lifecycle-header';

class Lifecycle extends Component {

  renderHeader(){
    if( this.props.data.header ){
      return <LifecycleHeader data={this.props.data.header}/>
    }
  }
  renderBody(){
    var height = ( this.props.data.header ) ? "90" : "100";
    return <LifecycleBody data={this.props.data.body} height={height} components={this.props.components}/>
  }
  render() {
    return (
      <div style={{backgroundColor:"#fff",position:"absolute", width: "80%", height: "80%", marginLeft:"50px", borderRight: "2px solid #fff", borderBottom: "2px solid #fff"}}>
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    );
  }

}

export default Lifecycle;
