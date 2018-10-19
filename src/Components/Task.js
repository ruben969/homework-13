import React, { Component } from 'react';


export default class Task extends Component {
    constructor(props) {
        super(props);

        this.lastIndex = this.lastIndex.bind(this);
    }

    lastIndex() {
        return ( 
            <div>
              {this.props.list.arrTitle.length} 
            </div>
        );
    }

    render() {
        return (
            <div className="app-doto">
                <div className="app-name">
                    To Do List
                    <div className="count-todo"> 
                        {this.lastIndex()}
                    </div>
                </div>
                <div className="create-task" >
                    <div>
                        <input type="text"
                         onChange={this.props.titleName} 
                         className="task-title title-task">
                         </input>

                        <button 
                        className="accept accept-title" 
                        onClick={this.props.titleCreate}
                        disabled={!this.props.list.title}> 
                        Create </button>

                    </div>
                </div>
            </div>
        );
    }
}