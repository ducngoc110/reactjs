import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import * as actions from './actions/index';
import { connect } from 'react-redux';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            taskEditing : null
        }
    }

    onToggleForm = () => {
        this.props.onToggleForm();
    }

    onShowForm = () => {
        this.setState({
            isDisplayForm : true
        })
    }

    onExitForm = () => {
        this.props.onToggleForm();
    }

    onUpdate = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        var taskEditing = tasks[index];
        this.setState({
            taskEditing : taskEditing
        });
        this.onShowForm();
    }

    findIndex = (id) => {
        var {tasks} = this.state;
        var result = -1;
        tasks.forEach((task, index) => {
            if (task.id === id) {
                result = index;
            }
        });
        return result;
    }

    render() {
        var { taskEditing } = this.state;
        var {isDisplayForm} = this.props;
        var elmForm = isDisplayForm ? 
        <TaskForm 
            task={taskEditing} 
        /> : '';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Manage Task</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>
                        {/* TaskForm */}
                        { elmForm }
                    </div>
                    <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
                        <button
                            type="button"
                            className="btn btn-default"
                            onClick={ this.onToggleForm }
                        >
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        {/* Search - Sort */}
                        <Control />
                        {/* List */}
                        <TaskList
                            onUpdate={this.onUpdate} 
                        />
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isDisplayForm : state.isDisplayForm
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toogleForm());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

