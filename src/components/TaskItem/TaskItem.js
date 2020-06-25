import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        const {task,index} = this.props;
        return (
            <tr>
                <td>{index +1}</td>
                <td>{task.name}</td>
                <td className="text-center " >{task.date}</td>
                <td className="text-center">
                    <span className={task.status===true ?'badge badge-danger':'badge badge-success'}>
                    {task.status=== true?'Kich hoat':'Dang thuc hien'}
                    </span>
                </td>
                
                <td className="text-center d-flex">
                    <button type="button" className="btn btn-warning mr-3">
                    Sửa
                    </button>
                    <button type="button" className="btn btn-danger">
                    Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;