import React, { Component } from 'react';
import './TaskItem.css'
class TaskItem extends Component {
    handleComplete = ()=>{
       this.props.handleComplete(this.props.task.id);
    }
    handleDelete = () =>{
        this.props.handleDelete(this.props.task.id);
    }
    handleEdit = ()=>{
        this.props.handleEdit(this.props.task.id);
    }
    render() {
        const {task,index} = this.props;
        return (
            <tr className={task.status===false ? 'text-center completeItem' : 'text-center'}>
                <td>{index +1}</td>
                <td>{task.name}</td>
                <td className="text-center" >{task.date}</td>
                <td className="text-center">
                    <span className={task.status===true ?'badge badge-danger':'badge badge-success '}>
                    {task.status=== true?'Đang thực hiện':'Hoàn thành'}
                    </span>
                </td>
                <td className="justify-content-center d-flex">
                    <button type="button" className="btn btn-outline-success mr-3" onClick={this.handleComplete} title="Hoàn thành">
                    <i className="fas fa-check"></i>
                    </button>
                    <button type="button" className="btn btn-outline-warning mr-3" onClick={this.handleEdit}  title="Chỉnh sửa">
                    <i className="fas fa-edit"></i>
                    </button>
                    <button type="button" className="btn btn-outline-danger" title="Xóa" onClick={this.handleDelete}>
                    <i className="far fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;