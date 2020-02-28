import React,{Component} from 'react';

class AddTodo extends Component {
  state = {
    content: ''
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content:''
    })
  }
  handleChange =(e)=>{
    this.setState({
      content : e.target.value
    })
  }
  render(){
    return(
    <form onSubmit={this.handleSubmit}>
      <label htmlFor="todo"></label>
      <input type="text" name="todo" id="todo" onChange={this.handleChange} value={this.state.content}/>
    </form>    
    )
  }
}

export default AddTodo;