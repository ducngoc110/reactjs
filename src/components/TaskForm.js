import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name : '',
            status: true
        }
    }

    componentWillMount(){
        if(this.props.task){
            this.setState({
                id: this.props.task.id,
                name : this.props.task.name,
                status: this.props.task.status
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        // if (this.props.taskEditing !== null) {
        this.setState((prevState, nextProps) => ({
            id: nextProps.task.id,
            name: nextProps.task.name,
            status: nextProps.task.status
        }))
        // }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value = (target.value === 'true') ? true : false;
        }
        this.setState({
            [name] : value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddTask(this.state);
        this.onClear();
        this.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name : '',
            status: true
        });
    }

    render() {
        var {id} = this.state;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{ (id) ? 'Update' : 'Add'}
                    <span 
                        className="fa fa-times-circle text-right"
                        onClick={this.onCloseForm}
                    ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="name" 
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select 
                            className="form-control" 
                            required="required" 
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-default">{ (id) ? 'Update' : 'Add'}</button>&nbsp;
                            <button 
                                type="button" 
                                className="btn btn-default"
                                onClick={this.onClear}
                            >Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: (task) => {
            dispatch(actions.addTask(task));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskForm);
