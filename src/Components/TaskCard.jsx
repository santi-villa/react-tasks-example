import React from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-700 text-white m-2 p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize text-center">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-5 hover:bg-red-400 hover:cursor-pointer"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;
