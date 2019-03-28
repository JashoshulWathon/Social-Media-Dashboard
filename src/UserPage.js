import React from 'react';
import MyContext from './MyContext';
import UserDetail from './Components/UserDetail';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class UserPage extends React.Component {

  state = {
    userData: [],
    viewDetail: false
  }

  showDetail = (context, user) => {
    console.log('user', user);
    console.log('context', context);
    // context.posts.map( post => {
    //   if(user.id === post.userId) {
    //     console.log(post.userId);
    //     this.setState({

    //     });
    //   }
    // })
    this.setState({
      userData: user,
      viewDetail: true
    });

  }

  closeDetail = () => {
    this.setState({
      viewDetail: false
    });
  }

  render() {
    return (
      <div>
        <MyContext.Consumer>
          {context => (
            <div className="container">
              <h4>List of Users</h4>
              <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Phone</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {context.users.map(user => (
                    
                    <TableRow key={user.id}>
                      <TableCell component="th" scope="row">{user.name}</TableCell>
                      <TableCell>{user.phone}</TableCell>
                      <TableCell><a href={`mailto:${user.email}`}target="_top">{user.email}</a></TableCell>
                      <TableCell><Button color="primary" onClick={() => this.showDetail(context, user)}>View Detail</Button></TableCell>
                    </TableRow>
                  
                  ))}
                  </TableBody>
                </Table>
              </Paper>
            </div>
          )}
        </MyContext.Consumer>
        <UserDetail
          open={this.state.viewDetail}
          close={this.closeDetail}
          userData={this.state.userData}
        />
      </div>
    );
  }
}

export default UserPage;