import Form from "@/components/Form";
import { TodoCardProps } from "@/components/TodoCard";
import TodoList from "@/components/TodoList";
import React, { useState } from "react";

const App = () => {
  const [list, setList] = useState<TodoCardProps[]>([]);
  const addList = (newTodo: TodoCardProps) => {
    setList([...list, newTodo]);
  };

  return (
    <div className="flex justify-center mb-4">
      <div className="flex flex-col w-80 items-center">
        <p className=" text-3xl m-2">Todo List</p>
        <Form onClick={addList}></Form>
        <TodoList todoListArray={list}></TodoList>
      </div>
    </div>
  );
};

export default App;
