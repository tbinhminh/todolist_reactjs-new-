import React, { Component } from 'react';

class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: '',
            name: ''  
        }
    }
    onExitForm = () =>{
        this.props.onExitForm();
    }
    handleSubmitEdit = (event)=>{
      event.preventDefault();
      this.props.handleSubmitEdit(this.state)
    }
    componentDidMount(){
      // console.log('typeof....',Array.isArray(this.props.selectTaskEdit))
      if(this.props.selectTaskEdit){
        this.props.selectTaskEdit.map(t=>(
            this.setState({
              date: t.date,
              id: t.id,
              name: t.name,
              status: t.status
          })
        ))
    }
  }
  handleEditchange =(event) =>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }
    render() {
        return (
            <div className="card text-left">
            <div className="card-body">
              <h4 className="card-title">Chỉnh sửa công việc</h4> 
              <p className="card-text">
              </p>
              <form onSubmit={this.handleSubmitEdit}>
                <div className="form-group">
                  <label>Tên công việc: </label>
                  <input type="text"  className="form-control" name="name" value={this.state.name} onChange={this.handleEditchange}/>
                </div>
                <br/>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary mr-2">Lưu</button>
                  <button type="button" className="btn btn-danger" onClick={this.onExitForm}>Đóng </button> {/* onClick={this.props.onExitForm} */}
                </div>
              </form>
              <p />
            </div>
          </div>
        );
    }
}

export default EditItem;