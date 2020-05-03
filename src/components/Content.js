import React, { Component } from 'react';

class Content extends Component {
    constructor(props){
        super(props);
        this.state={
            status :0
        }
    }
    renderBtn = ()=>(
        <div>
            <div  className="btn btn-primary mr-3" onClick={()=>this.changeInfo()}>Edit profile</div>
            <div  className="btn btn-danger">remove</div>
        </div>
    )
    renderForm = ()=>(
        <div className="form-group ">
            <label className="text-danger" htmlFor="exampleFormControlInput1">Change Info</label>
            <div className="d-flex">
                <input type="email" className="form-control mr-3" id="exampleFormControlInput1"  />
                <div  className="btn btn-primary" onClick={()=>this.saveInfo()}>Save</div>
            </div>
        </div>
    )
    displayCheck = ()=>{
        if(this.state.status === 0){
            return this.renderBtn(); 
        }else{
            return this.renderForm();
        }
    }
    changeInfo = ()=>{
        this.setState({status:1});
    }
    saveInfo = () =>{
        this.setState({status:0});
    }
    render() {
        return (
            <div className="card border border-dark mr-3 mt-2" style={{width: '20rem',height:'40rem'}}>
                <img className="card-img-top" style={{width:'100%', height:'60%', objectFit:'cover'}} src={this.props.srcImage} />
                <div className="card-body">
                <h5 className="card-title">{this.props.name} </h5>
                <p className="card-text">{this.props.info}</p>
                <hr></hr>
                {this.displayCheck()}
                </div>
            </div>
        );
    }
}

export default Content;