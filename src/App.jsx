import React from "react";

class App extends React.Component {

  constructor() {
    super();

    this. state = {
      count: 0
    }

    this.handleClick =this.handleClick.bind(this);
    this.handleClick2 =this.handleClick2.bind(this);

  }


  handleClick() {
   // this.setState((prevState)=>({ count: prevState.count + 1 }),()=> console.log('setstatecompleted'));
    this.setState((prevState)=>({ count: prevState.count + 1 }));
   // this.setState((prevState)=>({ count: prevState.count + 1 }));
    console.log('end of click');
  }

  handleClick2() {
    // this.setState((prevState)=>({ count: prevState.count + 1 }),()=> console.log('setstatecompleted'));
     this.setState((prevState)=>({ count: prevState.count - 1 }));
    // this.setState((prevState)=>({ count: prevState.count + 1 }));
     console.log('end of click');
   }

  render() {
    return (
      <div className="App">
        Hello from CRA
        <button onClick={this.handleClick2}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleClick}>+</button>


      </div>
    );
  }
}

export default App;
