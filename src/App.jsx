import React from 'react';

export default class App extends React.Component {
    state = {
        count: 0,
        isCounting: false,
    };

  componentDidMount() {
    const timeCount = localStorage.getItem('timer');
    if (timeCount)
      this.setState({ count: Number(timeCount) });
  }

    componentDidUpdate() {
      localStorage.setItem('timer', this.state.count)
    }

    componentWillUnmount() {
    clearInterval(this.counterId);

    }

  handleStart = () => {
    this.setState({ isCounting: true });
    this.counterId = setInterval(() => { this.setState({ count: this.state.count + 1 }) }, 1000);
  }

  handleStop = () => {
    this.setState({ isCounting: false });
    clearInterval(this.counterId);
  }

  handleReset = () => {
    this.setState({ isCounting: false ,count:0 });
    clearInterval(this.counterId);
    
  }
    render() {
        return (
            <div className="App">
                <h1>React Timer</h1>
                <h3>{this.state.count}</h3>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}