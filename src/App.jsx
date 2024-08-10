import { useState,useEffect } from "react";
import { Addtodo } from "./components/Addtodo";
import { Rendertodos } from "./components/Rendertodos";

function App() {
  const [input, setinput] = useState("");
  const [todos, settodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  return (
    <>
      <div className="container">
        <h1 className="todo_title">To-Do-List</h1>
        <Addtodo input={input} setinput={setinput} settodos={settodos} />
        <Rendertodos todos={todos} settodos={settodos}/>
      </div>
    </>
  );
}

export default App;
