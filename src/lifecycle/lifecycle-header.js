import React, { Component } from 'react';
import LifecycleHeaderCell from './lifecycle-header-cell'

class LifecycleHeader extends Component {

  renderHeader(){
    var totalCell = this.props.data.length;
    var marginCell = 0;

    for( var i in this.props.data ){
      if( this.props.data[i].style && this.props.data[i].style.marginLeft ) {
        marginCell += 1;
      }
    }

    var marginWidth = 2;
    var totalMargin = marginWidth * marginCell;
    var cellWidth = ( 100 - totalMargin ) / totalCell;

    var cell = [];
    var left = 0;
    for( i in this.props.data ){
      if( i > 0 ){
        left += cellWidth;
      }

      if(this.props.data[i].style && this.props.data[i].style.marginLeft){
        left += marginWidth;
      }
      console.log(this.props.data[i])
      cell.push( <LifecycleHeaderCell key={Math.random()} width={cellWidth} left={left} data={this.props.data[i]}/> )
    }
    return cell;

  }

  render() {
    return <div style={{backgroundColor:"#fff",position:"absolute", width: "100%", height: "10%", border: "0px solid #000"}}>
      {this.renderHeader()}
    </div>
  }
}

export default LifecycleHeader;
