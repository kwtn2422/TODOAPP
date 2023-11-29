import React from "react";
import TodoCard, { TodoCardProps } from "./TodoCard";

type TodoListProps = {
  todoListArray: Array<TodoCardProps>;
};

const TodoList: React.FC<TodoListProps> = ({ todoListArray }) => {
  todoListArray;
  return todoListArray.map((card: TodoCardProps, i) => {
    return <TodoCard key={i} {...card}></TodoCard>;
  });
};

export default TodoList;
