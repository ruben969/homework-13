import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Components/Task';
import List from './Components/List';
import NewTask from './Components/new-task';

class App extends Component {
  render() {
    return (
      <div className='app-todo' >
          <Task className='App'/>
          <List/>
        
      </div>
    );
  }
}

export default App;
