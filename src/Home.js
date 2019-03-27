import React from 'react';
import axios from 'axios';
import './Home.css';
import Info from './Components/Info';
import CardPost from './Components/CardPost';

class Home extends React.Component {

  state = {
    users: [],
    posts: [],
    comments: [],
    photos: []
  }

  componentDidMount() {

    axios.all([
      axios.get(`https://jsonplaceholder.typicode.com/users`),
      axios.get(`https://jsonplaceholder.typicode.com/posts`),
      axios.get(`https://jsonplaceholder.typicode.com/comments`),
      axios.get(`https://jsonplaceholder.typicode.com/photos`)
    ])
    .then(axios.spread((a, b, c, d) => {
      const users = a.data;
      const posts = b.data;
      const comments = c.data;
      const photos = d.data;
      this.setState({ users, posts, comments, photos });
      console.log('users', users);
      console.log('posts', posts);
      console.log('comments', comments);
      console.log('photos', photos);
    }));
  }


  render() {
    const { users, posts, comments, photos } = this.state;

    return (
      <div className="container">
        <div>
          <Info
              value={users.length}
              title='Total Users'
            /> 
          <Info
            value={posts.length}
            title='Total Posts'
          /> 
          <Info
            value={comments.length}
            title='Total Comments'
          /> 
          <Info
            value={photos.length}
            title='Photos Uploaded'
          /> 
        </div>
        <div>
          <CardPost
            imgPost={'3'}
            title={'3'}
          />
        </div>
      </div>
    );
  }
}

export default Home;
