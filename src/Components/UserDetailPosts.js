import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import './UserDetail.css';
import { TextField } from '@material-ui/core';

class UserDetailPost extends React.Component {

  render() {
    return (
      <Drawer
        anchor="right"
        open={this.props.open}
        onClose={this.props.close}
      >
        <div style={{ padding: 30, minWidth: 370, maxWidth: 430 }}>
          <h4 style={{ marginBottom: 50 }}>{this.props.userData.name}<br />
            <small><a href={`mailto:${this.props.userPost}`}>{this.props.userData.email}</a></small>
          </h4>

          <form>
            <TextField style={{ width: '100%' }} 
              onChange={e => this.changeTitle(e)} 
              autoFocus={true} 
              ariant="outlined" 
              multiline={true} 
              rows='2' 
              label="Title" 
              value={this.props.postData.title} 
            />
            <br />
            <br />
            <br />
            <TextField style={{ width: '100%', minHeight: 400 }} onChange={this.props.changeBody} variant="outlined" multiline={true} rows='6' label="Body" value={this.props.postData.body} />
          </form>
        </div>
      </Drawer>
    );
  }
}

export default UserDetailPost;