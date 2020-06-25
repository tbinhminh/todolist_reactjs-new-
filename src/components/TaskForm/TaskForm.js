import React, { Component } from 'react';
class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: '',
        status: true
  }
}
  onExitForm = ()=>{
    this.props.onExitForm();
  }
  onClear = () =>{
    this.setState ({
      name:'',
      status: true
    })
  }
  handleChange =(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }
  handleSubmit =(event)=>{
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.onClear();
    this.onExitForm();
  }
    render(){
        return (
            <div className="card text-left">
            <div className="card-body">
              <h4 className="card-title">Thêm Công Việc</h4> 
              <p className="card-text">
              </p><form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Tên: </label>
                  <input type="text"  className="form-control" name="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <label>Trang thai: </label>
                <select className="form-control" name="status" value={this.state.status} onChange={this.handleChange}>
                  <option value={true}>Kích Hoạt</option>
                  <option value={false}>Ẩn</option>
                </select>
                <br />
                <div className="text-center">
                  <button type="submit" className="btn btn-primary mr-2">Thêm</button>
                  <button type="submit" className="btn btn-danger mr-2" onClick={this.onClear}>Làm mới </button>
                  <button type="submit" className="btn btn-danger" onClick={this.onExitForm}>Đóng </button>
                </div>
              </form>
              <p />
            </div>
          </div>
        );
    }
}

export default TaskForm;