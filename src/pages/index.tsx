import Form from "@/components/Form";
import { TodoCardProps } from "@/components/TodoCard";
import TodoList from "@/components/TodoList";
import React, { useState } from "react";

// const list: TodoCardProps[] = [
//   { title: "hoge1", description: "hogehoge", status: "Done" },
//   { title: "hoge1", description: "hogehoge", status: "Progress" },
//   { title: "hoge1", description: "hogehoge", status: "Incomplete" },
// ];

const App = () => {
  //todoListArrayをstate管理し、更新関数をFormコンポーネントにわたす
  const [list, setList] = useState<TodoCardProps[]>([]);
  const addList = (newTodo: TodoCardProps) => {
    setList([...list, newTodo]);
  };

  return (
    <div className="flex flex-col w-80">
      <TodoList todoListArray={list}></TodoList>
      <Form onClick={addList}></Form>
    </div>
  );
};

export default App;
