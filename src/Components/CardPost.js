import React from 'react';
import './CardPost.css';

class CardPost extends React.Component {
  render() {
    return (
      <div className="CardPost">
        <div>
            <img src={this.props.imgPost} alt='img-post' />
        </div>
        <h5>{this.props.title}</h5>
      </div>
    );
  }
}

export default CardPost;