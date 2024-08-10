export function Rendertodos({ todos, settodos }) {

  function deletetodos(id) {
    settodos((current) => current.filter((todo) => todo.id !== id));
  }

  function markreadtodos(id) {
    settodos((current) =>
      current.map((todo) => {
        if (todo.id === id) return { ...todo, iscomplete: true };
        return todo;
      })
    );
  }

  return (
    <>
      <div className="todoitems_container">
        {todos.map((todo) => {
          return (
            <div
              style={
                todo.iscomplete
                  ? { textDecoration: "line-through", opacity: "20%" }
                  : { backgroundColor: "rgb(63, 163, 230)" }
              }
              className="todo_item"
              key={todo.id}
            >
              <div>{todo.name}</div>
              <div>
                <button
                  onClick={() => markreadtodos(todo.id)}
                  className="btn-read"
                >
                  mark as read
                </button>
                <button
                  onClick={() => deletetodos(todo.id)}
                  className="btn-delete"
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
