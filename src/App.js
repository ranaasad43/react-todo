import React,{Component} from 'react';
import Todos from './Todos';

class App extends Component {
  state = {
    todos: [
      {id:1 ,content: 'buy some milk'},
      {id:2 ,content: 'go to gym'}
    ]
  }
  deltodo =(id) =>{
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }
  render(){
    return (
      <div className="App container">
        <h1 className="display-4">React Todo-App</h1>
        <Todos todos={this.state.todos} deltodo={this.deltodo}/>
      </div>
    );
  }
  
}

export default App;
