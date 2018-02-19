import React, { Component } from 'react';

class LifecycleHeaderCell extends Component {

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
        orange: "#F8D053"
			}
    };
  }

  render() {
    return <div style={{ position:"absolute", width:this.props.width+"%", left:this.props.left+"%", top:"30%", height:"100%", colors:"#fff", textAlign:"center"}}>
      {this.props.data.label}
    </div>
  }
}

export default LifecycleHeaderCell;
