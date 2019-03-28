import React from 'react';
import MyContext from './MyContext';

class PostPage extends React.Component {

  render() {
    const kosong = '';

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
                          <div>
                            <h5>{post.title}</h5>
                            <p>{post.body}</p>
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
      </div>
    );
  }
}

export default PostPage;