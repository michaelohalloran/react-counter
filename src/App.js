// https://www.fullstackreact.com/articles/use-property-initializers-for-cleaner-react-components/
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    count: 0,
    errorMsg: ''
  };

  componentDidUpdate() {
    //if the count is positive and there's still an error, clear it
    return this.state.count > 0 && this.state.errorMsg ? 
      this.setState({errorMsg: ''}) : 
      null;
  }

  incrementCount = ()=> {
    this.setState((prevState)=> {
      return {count: prevState.count + 1}
    });
  }

  decrementCount = ()=> {
    if(this.state.count > 0) {
      this.setState(prevState=> (
            {count: prevState.count - 1}
          )
      );
    } else {
      this.setState({errorMsg: 'Negative numbers not allowed'})
    }
  }

  render() {

    let testText;
    testText = this.state.count > 5 ? 
      <div>Count now > 5</div> : 
      null
      ;
      
    return (
      <div>
        <h1>Count: </h1>
        {/* <h2 style={{background: 'red', width: '50px'}>
          {this.state.count}
        </h2> */}
        <h2 className="h2">{this.state.count}</h2>
        <div className="btn" onClick={this.incrementCount}>+</div>
        <div className="btn" onClick={this.decrementCount}>-</div>
        {this.state.errorMsg && <div>{this.state.errorMsg}</div>}
        {testText}
      </div>
    );
  }
}

export default App;
