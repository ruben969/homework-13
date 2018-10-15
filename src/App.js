import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Components/Task';
import List from './Components/List';
import NewTask from './Components/new-task'

class App extends Component {
  render() {
    return (
      <div >
        <header className="App-header">
          <Task className="App"/>
         
        </header>
      </div>
    );
  }
}

export default App;
