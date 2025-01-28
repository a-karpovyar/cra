import React from 'react';
import { Posts } from './components/Posts';

export default class App extends React.Component {
  state = {
    posts: [
      { id: 'abc1', name: 'JS Basics' },
      { id: 'abc2', name: 'JS Advanced' },
      { id: 'abc3', name: 'React' }
    ]
  };
  removePost = (postId) => {
    this.setState({posts: this.state.posts.filter(post => post.id !== postId)});
  }

  render() {
    const {posts} = this.state;
    return (
      <div className="App">
        <Posts posts={posts} removePost = {this.removePost} />
      </div>
    );
  }
}