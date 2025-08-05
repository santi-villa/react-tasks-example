import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4 rounded-mb "
      >
        <h1 className="text-2xl font-bold text-center text-white mb-4">
          Crea tu tarea
        </h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-4"
        ></input>
        <textarea
          placeholder="Descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-4"
        ></textarea>
        <button className="bg-indigo-500 p-3 w-full text-white hover:cursor-pointer">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
