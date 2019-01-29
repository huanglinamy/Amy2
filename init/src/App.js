import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './App.css'; 

@inject('count')
@observer
class App extends Component {
  componentDidMount() {
    console.log('this.count', this.props.count, this.props.count.changeCount);
  }

  changeCount(type){
    this.props.count.changeCount(type).then(res=>{
      console.log('数据修改成功....');
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={()=>this.changeCount('+')}>+</button>
            <p>{this.props.count.count}</p>
          <button onClick={()=>this.changeCount('-')}>-</button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
