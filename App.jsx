import AppName from "./components/AppName"
import AppToDo from "./components/AppTodo"
import ToDoItem1 from "./components/TODoItem1"
import ToDoItem2 from "./components/TODoItem2"
import "./App.css";



function App() {
  return <center class='todo-container'>

    <AppName/>
    <AppToDo/>
    <ToDoItem1/>
    <ToDoItem2/>
    
  </center>  
}

export default App
