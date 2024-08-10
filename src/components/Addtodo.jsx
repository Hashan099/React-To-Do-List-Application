export function Addtodo({ input, setinput, settodos }) {
  function additem() {
    if (input === "") return;
    settodos((current) => [
      ...current,
      { id: crypto.randomUUID(), name: input, iscomplete: false },
    ]);
    setinput("");
  }

  return (
    <>
      <div className="todoinput_container">
        <input
          className="todo_input"
          type="text"
          name="add"
          id="add"
          placeholder="add an item"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button className="todo_button" onClick={additem}>
          Add Item
        </button>
      </div>
    </>
  );
}
