import React, { Component } from 'react';
import LifecycleBodyCell from './lifecycle-body-cell';

class LifecycleBodyRow extends Component {

  renderBodyCell(){
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

      //cell.push( <div style={{backgroundColor:"#F77975", position:"absolute", width:cellWidth+"%", left:left+"%", height:"100%", colors:"#fff"}}></div> );
      cell.push( <LifecycleBodyCell key={Math.random()} width={cellWidth} left={left} data={this.props.data[i]} components={this.props.components}/> )
    }
    return cell;
  }
  render() {
    return <div style={{position:"absolute", width:"100%", height:this.props.height, top: this.props.top}}>
      {this.renderBodyCell()}
    </div>
  }
}

export default LifecycleBodyRow;
