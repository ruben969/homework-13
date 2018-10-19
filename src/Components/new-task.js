import React, { Component } from 'react';



export default class NewTask extends Component {
    constructor(props) {
        super(props);
        this.edit = this.edit.bind(this); 
    }

    edit() {
        return (
            <div className='tasks'>
                <input type='text' className='task-title'></input>
                <button className="accept accept-title"> Save </button>
            </div>
        );
    }

    render() {
        return (
            this.props.data.map((task) => {
            return (
            <div key={task.listTitle} className='tasks'>
          
                <div className='title'>
                    {`${task.listTitle}`}
                </div>
                <div className='new-task'  >
                    New
                </div>
            </div>
            );
            })
        );
    }
}


