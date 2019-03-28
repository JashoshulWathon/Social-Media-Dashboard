import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import './UserDetail.css';

class UserDetail extends React.Component {

  render() {
    return (
      <Drawer
        anchor="right"
        open={this.props.open}
        onClose={this.props.close}
      >
        <div style={{ padding: 30, minWidth: 370 }}>
          <h4 style={{ marginBottom: 10 }}>{this.props.userData.name}</h4>
          <small><a href={`mailto:${this.props.userData.email}`}>{this.props.userData.email}</a></small>
          <br />
          <br />
          <ul>
            <li>
              <label>Username</label>< br />
              <span>{this.props.userData.username}</span>
            </li>
            <li>
              <label>Phone</label>< br />
              <span>{this.props.userData.phone}</span>
            </li>
            <li>
              <label>Website</label>< br />
              <span>{this.props.userData.website}</span>
            </li>
            {/* <li>
              <label>Address</label>
              <span>{this.props.userData.address}</span>
              <span>{this.props.userData.address.street}</span>
              <span>{this.props.userData.address.suite}</span>
              <span>{this.props.userData.address.zipcode}</span>
            </li> */}
            {/* <li>
              <label>Company</label>
              <span>{this.props.userData.company.name}</span>
            </li> */}
          </ul>
        </div>
      </Drawer>
    );
  }
}

export default UserDetail;