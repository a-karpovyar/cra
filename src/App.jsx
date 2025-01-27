import React from 'react';

export default class App extends React.Component {
  state = {
    posts: [
      { id: 'abc1', name: 'JS Basics' },
      { id: 'abc2', name: 'JS Advanced' },
      { id: 'abc3', name: 'React' }
    ]
  };
  render() {
    return (
      <div className="App">
        {this.state.posts.map(post => (
          <h2 key={post.id}>{post.name}</h2>
        ))}
      </div>
    );
  }
}