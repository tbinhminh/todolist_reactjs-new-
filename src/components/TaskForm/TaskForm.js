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
          <div className="col-md-6">
              <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                <input type="text"  className="form-control" name="name" value={this.state.name}
                 onChange={this.handleChange} placeholder="nhập tên công việc"/>
                  <button type="submit" className="btn btn-primary">Thêm</button>
                </div>
              </form>
            </div>
        );
    }
}

export default TaskForm;