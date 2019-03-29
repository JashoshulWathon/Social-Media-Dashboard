import React from 'react';
import './CardPost.css';

class CardPost extends React.Component {
  render() {
    return (
      <div className="CardPost">
          <h5>{this.props.title}</h5>
          <p>{this.props.body}</p>
      </div>
    );
  }
}

export default CardPost;