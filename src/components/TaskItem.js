import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.updateStatusTask(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id);
        this.props.onCloseForm();
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.task.id)
    }

    render() {
        var {task}=this.props;
        var {index}=this.props;
        return (
            <tr>
                <td>{ index }</td>
                <td>{ task.name }</td>
                <td className="text-center">
                    <span 
                        className={ task.status === true ? 'label label-success' : 'label label-danger' }
                        onClick={this.onUpdateStatus}
                    >
                        { task.status === true ? 'Active' : 'Hide' }
                    </span>
                </td>
                <td className="text-center">
                    <button 
                        type="button" 
                        className="btn btn-default"
                        onClick={ this.onUpdate }
                    ><span className="fa fa-pencil mr-5"></span>
                    </button>
                    &nbsp;
                    <button
                        type="button"
                        className="btn btn-default"
                        onClick={this.onDelete}
                    ><span className="fa fa-trash mr-5"></span>
                    </button>
                </td>
            </tr>
        );
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        updateStatusTask: (id) => {
            dispatch(actions.updateStatusTask(id));
        },
        onDelete: (id) => {
            dispatch(actions.deleteTask(id));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskItem);