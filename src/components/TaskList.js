import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

class TaskList extends Component {
    render() {
        var {tasks} = this.props;
        var elmItem = tasks.map((task, index) => {
            return <TaskItem
                        key={task.id} 
                        task={task} 
                        index={index + 1}
                        onUpdate={this.props.onUpdate}
                    />
        });
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Trạng Thái</th>
                                <th className="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" className="form-control" />
                                </td>
                                <td>
                                    <select className="form-control">
                                        <option value="-1">Tất Cả</option>
                                        <option value="0">Ẩn</option>
                                        <option value="1">Kích Hoạt</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            { elmItem }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks : state.tasks
    }
}

export default connect(mapStateToProps, null)(TaskList);
