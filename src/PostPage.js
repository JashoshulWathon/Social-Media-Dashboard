import React from 'react';
import MyContext from './MyContext';
import CardPost from './Components/CardPost';
import { Button } from '@material-ui/core';
// import UserDetailPost from './Components/UserDetailPosts';

class PostPage extends React.Component {

  render() {
    return (
      <div>
        <MyContext.Consumer>
          {context => (
            <div className="container">
              <h4>List of Posts</h4>
                {context.users.map(user => (
                  <div key={user.id}>
                    <div>{user.name}</div>
                    <br />
                    {context.posts.map(post => {
                      if(post.userId === user.id)
                        return (
                          <div key={post.id}>
                            <CardPost
                              title={post.title}
                              body={post.body}
                            />
                            <div>
                              <Button onClick={post => context.updateTitle(post.title)}>Edit</Button>
                            </div>
                          </div>
                        )
                      })}
                    <br />
                    <br />
                  </div>
                ))}
            </div>
          )}
        </MyContext.Consumer>
        {/* <UserDetailPost
          open={this.state.openEdit}
          close={this.closeEdit}
          userData={this.state.userData}
          postData={this.state.postData}
        /> */}
        
      </div>
    );
  }
}

export default PostPage;