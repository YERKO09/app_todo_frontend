import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;
    await addTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <input
        type="text"
        className="form-control"
        placeholder="Ingresa una nueva tarea todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="d-grid mt-3">
        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </div>
    </form>
  );
};
export default TodoForm;
