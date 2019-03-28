import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css';
import Info from './Components/Info';
// import CardPost from './Components/CardPost';
import MyContext from './MyContext';

class Home extends React.Component {

  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div className="container">
            <div className="f f-ev f-ctr" style={{ height: '100vh' }}>
              <Link to="/userPage">
                <Info
                    value={context.users.length}
                    title='Total Users'
                  /> 
              </Link>
              <Link to="/postPage">
                <Info
                  value={context.posts.length}
                  title='Total Posts'
                /> 
              </Link>
              <Link to="/albumPage">
                <Info
                  value={context.albums.length}
                  title='Total Albums'
                /> 
              </Link>
            </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Home;
