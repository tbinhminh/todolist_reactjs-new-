import React, {Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm/TaskForm'
import Controls from './components/Controls/Controls';
import TaskList from './components/TaskList/TaskList';
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        tasks: [

        ],
        displayForm : false
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
    onToggleForm = ()=>{
        this.setState({
            displayForm: !this.state.displayForm
        })
    }
    onExitForm = () =>{
        this.setState({
            displayForm: false
        })
    }
      handleSubmit = (data)=>{
          const {tasks} = this.state;
          let d = new Date();
          data.id = uuidv4();
          data.date = d.toLocaleString("en-AU");
          console.log(data);
          const tasksnew = [...tasks,data];
          this.setState({
              tasks : tasksnew
          })
        localStorage.setItem('tasks', JSON.stringify(tasksnew));
          
    }
  
  render(){
      const {tasks,displayForm} = this.state;
      const diplayForms = displayForm ? <TaskForm handleSubmit={this.handleSubmit} onExitForm={this.onExitForm}></TaskForm> : '';
    return (
        <div className="container">
            <div className="text-center">
                <h1>Quản Lý Công Việc</h1>
                <hr />
            </div>
            <div className="row">
                <div className="col-md-4">
                   {diplayForms}
                </div>
                <div className={displayForm ? 'col-md-8' : 'col-md-12'}>
                    <button type="button" className="btn btn-primary mr-4" onClick={this.onToggleForm}>Them cong viec</button>
                    <Controls></Controls>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <TaskList tasks = {tasks}></TaskList>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
export default App;
