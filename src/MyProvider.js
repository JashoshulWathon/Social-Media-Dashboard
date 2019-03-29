import React from 'react';
import axios from 'axios';
import MyContext from './MyContext';

class MyProvider extends React.Component {
  state = {
    users: [],
    posts: [],
    comments: [],
    photos: [],
    albums: []
  }

  componentDidMount() {
    axios.all([
      axios.get(`https://jsonplaceholder.typicode.com/users`),
      axios.get(`https://jsonplaceholder.typicode.com/posts`),
      axios.get(`https://jsonplaceholder.typicode.com/comments`),
      axios.get(`https://jsonplaceholder.typicode.com/photos`),
      axios.get(`https://jsonplaceholder.typicode.com/albums`)
    ])
      .then(axios.spread((a, b, c, d, e) => {
        const users = a.data;
        const posts = b.data;
        const comments = c.data;
        const photos = d.data;
        const albums = e.data;
        this.setState({ users, posts, comments, photos, albums });
        // console.log('users', users);
        // console.log('posts', posts);
        // console.log('comments', comments);
        // console.log('photos', photos);
      }));
  }

  updateTitle = (post) => {
    console.log(post.title);
  }

  render() {
    const { users, posts, comments, photos, albums } = this.state;
    return (
      <MyContext.Provider
        value={{
          users, posts, comments, photos, albums,
          updateTitle: this.updateTitle
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;