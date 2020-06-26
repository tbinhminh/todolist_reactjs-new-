import React, {Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm/TaskForm'
import Controls from './components/Controls/Controls';
import TaskList from './components/TaskList/TaskList';
import EditItem from './components/EditItem/EditItem';
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        tasks: [

        ],
        displayFormEdit : false,
        editTasks: null
    }
  }
    componentDidMount(){
        if(localStorage && localStorage.getItem('tasks')){
            const tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks : tasks
            })
        }
    }
    onShowFormEdit = ()=>{
        this.setState({
            displayFormEdit: true
        })
    }
    // đóng form edit
    onExitForm = () =>{
        // event.preventDefault();
        this.setState({
            displayFormEdit: false
        })
    }
    // Tạo mới task
      handleSubmit = (data)=>{
          const {tasks} = this.state;
          let d = new Date();
          data.id = uuidv4();
          data.date = d.toLocaleString("en-AU");
          const tasksnew = [...tasks,data];
          this.setState({
              tasks : tasksnew
          })
        localStorage.setItem('tasks', JSON.stringify(tasksnew));
    }
    //luu edit
    handleSubmitEdit =(data)=>{
        const {tasks} = this.state;
        const index = this.getIndex(data.id);// get index task edit trong state
        // console.log(data.name);
        // console.log( tasks[index]);
        tasks[index] =data;
        this.setState({
            tasks : tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));
        this.onExitForm();
    }
    getIndex =(id)=>{
        const {tasks} = this.state;
        let result = -1;
        tasks.forEach((task,index)=>{
            if(task.id === id){
                result = index;
            }
        });
        return result;
    }
    // hoàn thành task 
    handleComplete = (id)=>{
        const {tasks} = this.state;
        const newTask = tasks.map(task=>{
            if(task.id ===id)
            {
                task.status = !task.status;
            }
            return task;
        });
        this.setState({
            tasks:newTask
        })
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    // delete task
    handleDelete = id =>{
        const {tasks} = this.state;
        const filterTask = tasks.filter(task=> task.id !== id);
        this.setState({
            tasks: filterTask},()=>(console.log("after update state",this.state.tasks))
        )
        localStorage.setItem("tasks", JSON.stringify(filterTask));
    }
    //edit task
    handleEdit = (id)=>{
        const {tasks} = this.state;
        const taskEdit = tasks.filter(task=>task.id === id);
        this.setState({
            editTasks: taskEdit
        });
        // this.setState({
        //     editTasks: taskEdit
        // },()=>console.log(this.state.editTasks));//log  editTasks setState ham bất đồng bộ
        this.onShowFormEdit();

    }
  render(){
      const {tasks,displayFormEdit,editTasks} = this.state;
      const toggleFormEdit = displayFormEdit ? <EditItem  onExitForm={this.onExitForm} selectTaskEdit= {editTasks} handleSubmitEdit={this.handleSubmitEdit}></EditItem> : '' ;
    return (
        <div className="container">
            <div className="text-center">
                <h1>Quản Lý Công Việc</h1>
                <hr/>
            </div>
            <div className="row">
                <div className="col-md-4">
                   {toggleFormEdit}
                </div>
                <div className={toggleFormEdit ? 'col-md-8' : 'col-md-12'}>
                    {/* <button type="button" className="btn btn-primary mr-4" onClick={this.onToggleForm}>Them cong viec</button> */}
                    <div className="row mt-3">
                    <TaskForm handleSubmit={this.handleSubmit} onExitForm={this.onExitForm}></TaskForm>
                    <Controls></Controls>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <TaskList tasks = {tasks} handleComplete={this.handleComplete} handleEdit={this.handleEdit} handleDelete={this.handleDelete}></TaskList>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
export default App;
