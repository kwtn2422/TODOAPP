import React from "react";

export type statusType = "Done" | "Progress" | "Incomplete";

export type TodoCardProps = {
  title: string;
  description: string;
  status: statusType;
};

const statusClass = {
  Done: { bgColor: "bg-green-200", statement: "完了" },
  Progress: { bgColor: "bg-yellow-200", statement: "進行中" },
  Incomplete: { bgColor: "bg-gray-200", statement: "未実施" },
};

const TodoCard: React.FC<TodoCardProps> = ({
  title = "",
  description = "",
  status = "Incomplete",
}) => {
  return (
    <div className="flex shadow-md rounded w-full mb-1">
      <div
        className={`basis-1/6 h-20 flex items-center rounded-l ${statusClass[status].bgColor}`}
      >
        {statusClass[status].statement}
      </div>
      <div className="basis-5/6 flex flex-col">
        <p className="basis-1/3 bg-blue-200 flex items-center rounded-tr border-b border-gray-300">
          {title}
        </p>
        <p className="basis-2/3 bg-blue-100 flex items-center rounded-br">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TodoCard;
