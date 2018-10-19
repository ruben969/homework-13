import React, { Component } from 'react';
import './App.css';
import Task from './Components/Task';
import NewTask from './Components/new-task';

class App extends Component {
  constructor(props) {
    super(props);

    this.titleName = this.titleName.bind(this);
    this.titleCreate = this.titleCreate.bind(this);

    this.state = {
      title: '',
      arrTitle: [],
    };

  }

  titleName(event) {
    this.setState({ title: event.target.value });
  }

  titleCreate() {
    this.state.arrTitle.push({
      listTitle: this.state.title,
    });

    this.setState({title: ``})
  }

  render() {
    const data = this.state.arrTitle;
    return (
      <div className='app-todo' >
        <Task className='App' list={this.state} titleName={this.titleName} titleCreate={this.titleCreate}/>
        <NewTask data={data} />
      </div>
    );
  }
}
export default App;
