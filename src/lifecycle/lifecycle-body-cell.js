import React, { Component } from 'react';

class LifecycleBodyCell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colors:{
				red: "#F77975",
				grey: "#D8DADC",
        darkGrey: "#b5b8bc",
				green: "#0A7C71",
        blue: "#48B0F7",
        black: "#000000",
        white: "#FFFFFF",
        orange: "#F8D053",
        pink: "#fac4c6",
        sky: "#cff5f2"
			}
    };
  }

  renderCellData(){
    if( this.props.data.content ){
        var Component = this.props.components[ this.props.data.content.component ];
        return <Component data={this.props.data.content.data} style={this.props.data.content.style}/>
    }
  }

  render() {
    //var borderTop = (this.props.data.borderTop) ? this.props.data.borderTop : "";
    //var borderLeft = (this.props.data.borderLeft) ? this.props.data.borderLeft : "";

    var borderTop, borderLeft;

    if( this.props.data.style && this.props.data.style.borderTop ){
      borderTop = "2px " + this.props.data.style.borderTop.style + " " + this.state.colors[ this.props.data.style.borderTop.color ];
    }
    if( this.props.data.style && this.props.data.style.borderLeft ){
      borderLeft = "2px " + this.props.data.style.borderLeft.style + " " + this.state.colors[ this.props.data.style.borderLeft.color ];
    }

    return <div style={{ borderTop: borderTop, borderLeft: borderLeft, backgroundColor:this.state.colors[this.props.data.style.backgroundColor], position:"absolute", width:this.props.width+"%", left:this.props.left+"%", height:"100%", colors:"#fff"}}>
      {this.renderCellData()}
    </div>
  }
}

export default LifecycleBodyCell;
