import React, { Component } from 'react';

class LifecycleCell extends Component {

  render() {
    return (
      <div style={{width: "100%", height: "100%", padding:"5px", color:this.props.style.color, height:"100%", position: "relative"}}>
        <div style={{margin:"0", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>
          <p style={{textAlign:"center"}}>{this.props.data.total_revenue}</p>
          <p style={{textAlign:"center"}}>{this.props.data.average_revenue}</p>
          <p style={{textAlign:"center"}}>{this.props.data.total_contact} contacts</p>
        </div>
      </div>
    );
  }

}

export default LifecycleCell;
