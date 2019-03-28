import React from 'react';
import './Info.css';

class Info extends React.Component {
  render() {
    return (
      <div className="totalInfo">
        <h3>{this.props.value}</h3>
        <span>{this.props.title}</span>
      </div>
    );
  }
}

export default Info;