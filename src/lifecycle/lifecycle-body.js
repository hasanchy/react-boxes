import React, { Component } from 'react';
import LifecycleBodyRow from './lifecycle-body-row'

class LifecycleBody extends Component {

  renderBody(){
    var body = [];

    var totalRow = this.props.data.length;
    var rowHeight = 100 / totalRow;

    var top = 0;
    for( var i in this.props.data ){
      body.push(<LifecycleBodyRow key={Math.random()} height={rowHeight+"%"} top={top+"%"} data={this.props.data[i]} components={this.props.components}/>)
      top = top + rowHeight
    }

    return body;
  }

  render() {
    var top = 100 - this.props.height;
    return <div style={{backgroundColor:"#fff",position:"absolute", width: "100%", height: this.props.height +"%", top: top+"%", border: "0px solid #000"}}>
      {this.renderBody()}
    </div>
  }
}

export default LifecycleBody;
