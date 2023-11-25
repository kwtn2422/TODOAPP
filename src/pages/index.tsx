import Form from "@/components/Form";
import { TodoCardProps } from "@/components/TodoCard";
import TodoList from "@/components/TodoList";
import React from "react";

const list: TodoCardProps[] = [
  { title: "hoge1", description: "hogehoge", status: "Done" },
  { title: "hoge1", description: "hogehoge", status: "Progress" },
  { title: "hoge1", description: "hogehoge", status: "Incomplete" },
];

const index = () => {
  return (
    <div className="flex flex-col w-80">
      <TodoList todoListArray={list}></TodoList>
      <Form></Form>
    </div>
  );
};

export default index;
