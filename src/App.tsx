import { useState } from "react"
import Button from "./components/Button"
import Input from "./components/Input"
import List from "./components/List"
import {type ListType } from "./types/type"

function App() {
  const [todo, setTodo] = useState<String >("")
  const [todoList, setTodoList] = useState<ListType[]>([])
  const handleAdd = () => {
    setTodoList((prev) => [...prev, { value: todo, id: Date.now() }])
    setTodo("")
  }

  return (
    <>
      <div className="w-full h-screen flex  justify-center bg-slate-50" >
        <div className="w-[30%] h-[70vh] mt-[10%] shadow-lg bg-white  rounded-md">
          <div className="wrapper mt-5 px-3 flex gap-2">
            <Input todo={todo} type="text"  setTodo={setTodo} />
            <Button onClick={handleAdd} value={"Add"} className="py-1 px-3 bg-blue-950 text-white" />
          </div>
          <List todoList={todoList} setTodoList={setTodoList}  />
        </div>
      </div>
    </>
  )
}

export default App
