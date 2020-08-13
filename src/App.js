import React from 'react';


class App extends React.Component{

  state = {
    count:0
  };
  add = () =>{
    this.setState({count: 1});
    console.log("add");
  };
  minus = () =>{
    this.setState( {count : -1});
    console.log("minus");
  };


  render(){
    return (
      <div> 
        <h1>Current Number :  {this.state.count}</h1>
        <button onClick = {this.add}>더하기</button>
        <button onClick = {this.minus}>빼기</button>
      </div>
    )
  }
}

export default App;
