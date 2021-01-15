import React, {Component} from 'react';

class File extends Component{
    constructor(props){
        super(props);
        this.state ={
            show: ""
        }
    }
    toggle = () =>{
        if(this.state.show ==="none"){
            this.setState({
                show:""
            })}
        if(this.state.show ===""){
            this.setState({
                show:"none"
            })}
        
        
    }
    render(){
        return(
            <div>
                <h1>Home</h1>
                <ul style = {{display: this.state.show}}>   
                    <li>File1</li>
                    <li>File2</li>
                    <li>File3</li>
                </ul>
                <button type = "button" onClick ={this.toggle}>Toggle</button>
            </div>
        )
    }
}
export default File;