import React, { useState } from "react";
import { TodoCardProps } from "./TodoCard";

type FormProps = {
  onClick: (newTodo: TodoCardProps) => void;
};

const Form: React.FC<FormProps> = ({ onClick }) => {
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      onClick({ title: title, description: description, status: 2 });
      setTitle("");
      setDiscription("");
    } else {
      alert("titleかdescriptionが空です");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex pb-2 w-full">
      <div className="flex flex-col basis-5/6">
        <div className="flex flex-col">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
            className="shadow-md border border-gray-200 rounded "
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDiscription(e.target.value)}
            placeholder="description"
            className="shadow-md border border-gray-200 rounded "
          />
        </div>
      </div>
      <button
        type="submit"
        className="rounded bg-violet-300 basis-1/6 hover:bg-opacity-70"
      >
        +
      </button>
    </form>
  );
};

export default Form;
