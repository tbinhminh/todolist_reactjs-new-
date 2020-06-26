import React, { Component } from 'react';
import TaskItem from '../TaskItem/TaskItem';

class TaskList extends Component {
    render() {
      const {tasks,handleComplete,handleDelete,handleEdit} = this.props;
      const TasksItem = tasks.map((task,index)=>{
        return <TaskItem key={task.id} index={index} task={task} handleComplete={handleComplete} handleDelete={handleDelete} handleEdit={handleEdit}></TaskItem>
      })
        return (
          
            <table className="table table-bordered table-hover">
                <thead>
                  <tr>
        <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Ngày tạo</th>
                    <th className="text-center">Trạng Thái</th>
                    <th className="text-center">Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td />
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td/>
                    <td>
                      <select className="form-control">
                        <option value={-1}>Tất Cả</option>
                        <option value={0}>Ẩn</option>
                        <option value={1}>Kích Hoạt</option>
                      </select>
                    </td>
                    <td />
                  </tr>
                  {TasksItem}
                </tbody>
              </table>
        );
    }
}

export default TaskList;